// DevTools Scripts - cleanup.ts
// Cleans up node_modules from projects

import { rmSync } from 'fs';
import { join } from 'path';

const projects = process.argv.slice(2) || ['.'];

projects.forEach(project => {
  const nodeModulesPath = join(project, 'node_modules');
  try {
    rmSync(nodeModulesPath, { recursive: true, force: true });
    console.log(`✅ Cleaned: ${project}/node_modules`);
  } catch (e) {
    console.log(`⚠️  Skipped: ${project}`);
  }
});