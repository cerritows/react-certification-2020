function findElement(elements, elementType) {
  if (Array.isArray(elements)) {
    return elements.filter((child) => child.type === elementType);
  }
  if (elements.type === elementType) {
    return elements;
  }
  return null;
}

export default findElement;
