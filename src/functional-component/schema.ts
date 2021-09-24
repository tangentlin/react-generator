export interface Schema {
  /**
   * The path to create the component.
   */
  path?: string;
  /**
   * The name of the component.
   */
  name: string;
  /**
   * Flag to indicate if a dir is created.
   */
  subfolder?: boolean;

  /**
   * The story path as presented in storybook
   */
  storyPath?: string;
}
