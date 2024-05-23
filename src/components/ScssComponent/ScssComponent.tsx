import './scss-component.scss';

export function ScssComponent() {
  return (
    <div className="wireframe-red">
      <div style={{ width: '300px', aspectRatio: '4 / 3' }}>
        <div style={{ width: '100px', aspectRatio: '1 / 1' }} />
        <div style={{ width: '100px', aspectRatio: '1 / 1' }} />

        <p className="float-end">hola</p>
      </div>
      <div style={{ width: '100px', aspectRatio: '1 / 1' }} />
    </div>
  );
}
