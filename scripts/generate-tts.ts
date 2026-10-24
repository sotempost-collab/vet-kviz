import ZAI from 'z-ai-web-dev-sdk';
import fs from 'fs';
import path from 'path';

const OUTPUT_DIR = '/home/z/my-project/public/audio';

interface TTSItem {
  text: string;
  voice: 'tongtong' | 'chuichui' | 'xiaochen' | 'jam' | 'kazi' | 'douji' | 'luodo';
  speed: number;
  filename: string;
}

const items: TTSItem[] = [
  // "Ой" в смешном голосе (3 варианта) — используем chuichui (живой/милый)
  { text: 'Ой!', voice: 'chuichui', speed: 1.3, filename: 'oops-1.wav' },
  { text: 'Ой-ой!', voice: 'chuichui', speed: 1.5, filename: 'oops-2.wav' },
  { text: 'Ой, не-а!', voice: 'chuichui', speed: 1.2, filename: 'oops-3.wav' },
  // Похвала — чередуем при правильном ответе
  { text: 'Молодец!', voice: 'tongtong', speed: 1.05, filename: 'praise-molodets.wav' },
  { text: 'Верно!', voice: 'tongtong', speed: 1.0, filename: 'praise-verno.wav' },
  { text: 'Точно!', voice: 'tongtong', speed: 1.05, filename: 'praise-tochno.wav' },
  // Финальное сообщение при завершении теста
  { text: 'Тест завершён! Отличная работа!', voice: 'tongtong', speed: 1.0, filename: 'finish-success.wav' },
  { text: 'Тест завершён. Попробуй ещё раз, чтобы улучшить результат!', voice: 'chuichui', speed: 1.0, filename: 'finish-partial.wav' },
];

const sleep = (ms: number) => new Promise<void>(r => setTimeout(r, ms));

async function main() {
  if (!fs.existsSync(OUTPUT_DIR)) {
    fs.mkdirSync(OUTPUT_DIR, { recursive: true });
  }

  const zai = await ZAI.create();
  const results: { file: string; ok: boolean; size?: number; error?: string }[] = [];

  for (const item of items) {
    const outPath = path.join(OUTPUT_DIR, item.filename);
    try {
      const response = await zai.audio.tts.create({
        input: item.text,
        voice: item.voice,
        speed: item.speed,
        response_format: 'wav',
        stream: false,
      });
      const arrayBuffer = await response.arrayBuffer();
      const buffer = Buffer.from(new Uint8Array(arrayBuffer));
      fs.writeFileSync(outPath, buffer);
      results.push({ file: item.filename, ok: true, size: buffer.length });
      console.log(`✓ ${item.filename} (${item.text}) — ${(buffer.length / 1024).toFixed(1)} KB`);
    } catch (err) {
      const msg = err instanceof Error ? err.message : String(err);
      results.push({ file: item.filename, ok: false, error: msg });
      console.error(`✗ ${item.filename} — ${msg}`);
    }
    // Anti rate limit: 2s delay between requests
    await sleep(2000);
  }

  const ok = results.filter(r => r.ok).length;
  const failed = results.filter(r => !r.ok);
  console.log(`\n=== Done: ${ok}/${results.length} succeeded ===`);
  if (failed.length > 0) {
    console.error('Failed:', failed.map(f => f.file).join(', '));
    process.exit(1);
  }
}

main().catch(e => {
  console.error(e);
  process.exit(1);
});
