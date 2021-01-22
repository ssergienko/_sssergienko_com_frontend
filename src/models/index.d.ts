import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





export declare class Project {
  readonly id: string;
  readonly title?: string;
  readonly role?: string;
  readonly company?: string;
  readonly projectDescription?: string;
  readonly location?: string;
  readonly description?: string;
  readonly created_at?: string;
  readonly order?: number;
  constructor(init: ModelInit<Project>);
  static copyOf(source: Project, mutator: (draft: MutableModel<Project>) => MutableModel<Project> | void): Project;
}