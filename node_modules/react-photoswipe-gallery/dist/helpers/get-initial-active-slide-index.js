function getInitialActiveSlideIndex(index, targetId) {
  if (index !== null) {
    return index;
  }
  return targetId ? parseInt(targetId, 10) - 1 : 0;
}
export default getInitialActiveSlideIndex;