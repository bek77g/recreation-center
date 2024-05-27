export function Map() {
  return (
    <div className="py-24">
      <iframe
        src="https://yandex.ru/map-widget/v1/?ll=77.569310%2C42.441627&z=9.71"
        loading="lazy"
        width="100%"
        height="500px"
        frameborder="1"
        allowfullscreen="true"
        style={{ position: 'relative' }}
      />
    </div>
  );
}
