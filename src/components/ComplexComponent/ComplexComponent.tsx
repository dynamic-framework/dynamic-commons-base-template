import { useConsoleLogEffect } from './hooks/useConsoleLogEffect';
import { Element1 } from './component/Element1';
import { Element2 } from './component/Element2';
import { Element3 } from './component/Element3';

export function ComplexComponent() {
  useConsoleLogEffect();

  return (
    <div className="d-flex flex-column gap-2">
      <Element1 />
      <Element2 />
      <Element3 />
    </div>
  );
}
