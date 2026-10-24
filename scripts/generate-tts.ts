import ZAI from 'z-ai-web-dev-sdk';
import fs from 'fs';
import path from 'path';

const OUTPUT_DIR = '/home/z/my-project/public/audio';

interface TTSItem {
  text: string;
  // xiaochen — спокойный профессиональный голос для озвучки
  // tongtong — тёплый для похвалы
  // chuichui — милый/смешной для «ой»
  voice: 'tongtong' | 'chuichui' | 'xiaochen' | 'jam' | 'kazi' | 'douji' | 'luodo';
  speed: number;
  filename: string;
}

const items: TTSItem[] = [
  // === Реакции на ответ ===
  // "Ой" в смешном голосе (3 варианта)
  { text: 'Ой!', voice: 'chuichui', speed: 1.3, filename: 'oops-1.wav' },
  { text: 'Ой-ой!', voice: 'chuichui', speed: 1.5, filename: 'oops-2.wav' },
  { text: 'Ой, не-а!', voice: 'chuichui', speed: 1.2, filename: 'oops-3.wav' },
  // Похвала — чередуем при правильном ответе
  { text: 'Молодец!', voice: 'tongtong', speed: 1.05, filename: 'praise-molodets.wav' },
  { text: 'Верно!', voice: 'tongtong', speed: 1.0, filename: 'praise-verno.wav' },
  { text: 'Точно!', voice: 'tongtong', speed: 1.05, filename: 'praise-tochno.wav' },

  // === Вступительная озвучка ===
  {
    text: 'Привет! Это тест на понимание клинического осмотра слизистых оболочек. После каждого ответа ты услышишь обратную связь. Удачи!',
    voice: 'xiaochen',
    speed: 1.0,
    filename: 'intro.wav',
  },

  // === Вопрос 1: вопрос + варианты + пояснение ===
  {
    text: 'Вопрос первый. Почему осмотр слизистых оболочек имеет важное клиническое значение?',
    voice: 'xiaochen',
    speed: 1.0,
    filename: 'q1-question.wav',
  },
  {
    text: 'Вариант А. Позволяет косвенно оценить кровообращение, гидратацию и оксигенацию организма.',
    voice: 'xiaochen',
    speed: 0.95,
    filename: 'q1-option-a.wav',
  },
  {
    text: 'Вариант Б. Позволяет определить точную породу животного.',
    voice: 'xiaochen',
    speed: 0.95,
    filename: 'q1-option-b.wav',
  },
  {
    text: 'Вариант В. Позволяет измерить температуру тела без термометра.',
    voice: 'xiaochen',
    speed: 0.95,
    filename: 'q1-option-c.wav',
  },
  {
    text: 'Слизистые оболочки — это окно в кровообращение. Цвет говорит об оксигенации, влажность — о гидратации, время капиллярного наполнения — о перфузии тканей.',
    voice: 'xiaochen',
    speed: 0.95,
    filename: 'q1-explanation.wav',
  },

  // === Вопрос 2: вопрос + варианты + пояснение ===
  {
    text: 'Вопрос второй. Что наиболее вероятно указывает сочетание бледной, сухой слизистой и замедленного времени капиллярного наполнения?',
    voice: 'xiaochen',
    speed: 1.0,
    filename: 'q2-question.wav',
  },
  {
    text: 'Вариант А. Возможное нарушение перфузии, дегидратация или шок.',
    voice: 'xiaochen',
    speed: 0.95,
    filename: 'q2-option-a.wav',
  },
  {
    text: 'Вариант Б. Нормальное состояние здорового животного.',
    voice: 'xiaochen',
    speed: 0.95,
    filename: 'q2-option-b.wav',
  },
  {
    text: 'Вариант В. Только физиологическая пигментация слизистой.',
    voice: 'xiaochen',
    speed: 0.95,
    filename: 'q2-option-c.wav',
  },
  {
    text: 'Бледность, сухость и замедленное время капиллярного наполнения — это триада, указывающая на серьёзные проблемы: гиповолемию, дегидратацию или шок. Требуется немедленное вмешательство.',
    voice: 'xiaochen',
    speed: 0.95,
    filename: 'q2-explanation.wav',
  },

  // === Финальные сообщения ===
  {
    text: 'Тест завершён! Отличная работа! Ты отлично разбираешься в клиническом осмотре слизистых. Так держать!',
    voice: 'tongtong',
    speed: 1.0,
    filename: 'finish-success.wav',
  },
  {
    text: 'Тест завершён. Хороший результат, но есть над чем поработать. Попробуй пройти ещё раз.',
    voice: 'tongtong',
    speed: 1.0,
    filename: 'finish-partial.wav',
  },
  {
    text: 'Тест завершён. Не расстраивайся — ветеринария сложная тема. Попробуй ещё раз.',
    voice: 'chuichui',
    speed: 1.0,
    filename: 'finish-poor.wav',
  },
];

const sleep = (ms: number) => new Promise<void>(r => setTimeout(r, ms));

async function main() {
  if (!fs.existsSync(OUTPUT_DIR)) {
    fs.mkdirSync(OUTPUT_DIR, { recursive: true });
  }

  const zai = await ZAI.create();
  let ok = 0;
  let failed = 0;

  for (const item of items) {
    const outPath = path.join(OUTPUT_DIR, item.filename);
    // Если файл уже существует и не пустой — пропустим генерацию (для скорости и анти rate limit)
    if (fs.existsSync(outPath) && fs.statSync(outPath).size > 1000) {
      console.log(`↻ skip ${item.filename} (exists)`);
      ok++;
      continue;
    }
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
      console.log(`✓ ${item.filename} (${item.voice}, ${item.text.slice(0, 30)}...) — ${(buffer.length / 1024).toFixed(1)} KB`);
      ok++;
    } catch (err) {
      const msg = err instanceof Error ? err.message : String(err);
      console.error(`✗ ${item.filename} — ${msg}`);
      failed++;
    }
    await sleep(2500); // anti rate limit
  }

  console.log(`\n=== Done: ${ok} ok, ${failed} failed ===`);
  if (failed > 0) process.exit(1);
}

main().catch(e => {
  console.error(e);
  process.exit(1);
});
