// ai-judge-relax-01 entry (Node 22, standard library only): writes one fixed text to /output/entry.txt.
// Outside the grader, MAKEFUN_OUTPUT_DIR stands in for /output.
import { writeFileSync } from 'node:fs';
import { join } from 'node:path';

const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

const TEXT = [
  'Nothing in this text needs an answer.',
  '',
  'It is late in a library where the lamps are on timers. One by one they click off down the long room, not all at once, the way a house goes quiet after the guests have gone. A cart of returned books waits by the desk. No one will shelve them tonight, and the books do not mind.',
  '',
  'Outside, snow is filling the footprints on the steps. By morning they will be soft hollows, then nothing, and the steps will be only steps again.',
  '',
  'You have read so many words today, and each one wanted something. These want nothing. They are just here, the way the snow is here, laid along the railing in a line so thin it hardly counts as weight.',
  '',
  'The last lamp is the one by the window. It stays on a little longer than the others.',
  '',
  'Then it, too, clicks off, and the room keeps its shape in the dark.',
].join('\n');

writeFileSync(join(OUTPUT_DIR, 'entry.txt'), TEXT);
