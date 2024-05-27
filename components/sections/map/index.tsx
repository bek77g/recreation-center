'use client';

export function Map() {
  return (
    <div style="position:relative;overflow:hidden;">
      <iframe
        src="https://yandex.ru/map-widget/v1/?ll=77.569310%2C42.441627&z=9.71"
        width="560"
        height="400"
        frameborder="1"
        allowfullscreen="true"
        style="position:relative;"
      ></iframe>
    </div>
  );
}
