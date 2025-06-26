import { ComponentType } from 'react';

export type ComponentExamples = {
  examples: Record<string, ComponentType>,
  order: number,
}

export type AllExamples = Record<string, ComponentExamples>
