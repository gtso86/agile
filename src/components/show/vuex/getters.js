export default {
  title: state => state.content.Title,
  synopsis: state => state.content.Synopsis,
  genres: state => state.content.Genres,
  cast: state => state.content.Cast,
  image: state => state.content.Images,
};
