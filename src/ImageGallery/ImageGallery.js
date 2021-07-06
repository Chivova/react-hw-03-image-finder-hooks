import ImageGalleryItem from '../ImageGalleryItem';

export default function ImageGallery({ gallery }) {
  console.log(gallery);
  return (
    <ul>
      {gallery.map(({ id, webformatURL, largeImageURL, tags }) => (
        <ImageGalleryItem
          key={id}
          webformatURL={webformatURL}
          largeImageURL={largeImageURL}
          tags={tags}
        />
      ))}
    </ul>
  );
}
