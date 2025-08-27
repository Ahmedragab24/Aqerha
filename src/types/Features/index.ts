import { TypePropertyType } from "../Real-estates";

export interface FeatureType {
  id: number;
  name: string;
}

export interface DataFeaturesType {
  type: TypePropertyType;
  features: FeatureType;
}
