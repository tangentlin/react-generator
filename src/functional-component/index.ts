import { strings } from '@angular-devkit/core';
import { apply, mergeWith, move, Rule, template, url } from '@angular-devkit/schematics';

import { parseName } from '../utility/parse-name';
import { validateName } from '../utility/validation';
import { Schema as FnComponentOptions } from './schema';

export function functionalComponent(options: FnComponentOptions): Rule {
  if (options.path === undefined) {
    options.path = './';
  }

  const parsedPath = parseName(options.path, options.name);
  options.name = parsedPath.name;
  options.path = parsedPath.path;

  validateName(options.name);

  const templateSource = apply(url('./files'), [
    // options.noSpec ? filter(path => !path.endsWith('.test.__jsext__')) : noop(),
    template({
      ...strings,
      'if-flat': (s: string) => options.subfolder ? s : '',
      jsext: 'ts',
      jsxext: 'tsx',
      ...options,
    }),
    move(parsedPath.path),
  ]);

  return mergeWith(templateSource);
}
