import { Path, basename, dirname, normalize } from '@angular-devkit/core';

export const excludedPaths: Set<string> = new Set<string>([
  "src"
]);

export const sourcePathSeparator = "/";
export const storyPathSeparator = "/";

export interface Location {
  name: string;
  path: Path;
  storyPath: string;
}

export function parseName(path: string, name: string): Location {
  const nameWithoutPath = basename(name as Path);
  const namePath = dirname((path + sourcePathSeparator + name) as Path);

  return {
    name: nameWithoutPath,
    path: normalize(sourcePathSeparator + namePath),
    storyPath: suggestStoryPath(namePath, nameWithoutPath),
  };
}

export function suggestStoryPath( sourcePath: Path, name: string ): string {
  const pathParts: string[] = sourcePath.split(sourcePathSeparator);
  const storyParts: string[] = pathParts.filter((part: string) => (part.length > 0 && !excludedPaths.has(part)) && name !== part);
  return storyParts.join(storyPathSeparator);
}
