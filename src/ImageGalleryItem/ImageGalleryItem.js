export default function ImageGalleryItem({
  id,
  webformatURL,
  largeImageURL,
  tags,
}) {
  return (
    <li key={id}>
      <img src={webformatURL} alt={tags} />
    </li>
  );
}
