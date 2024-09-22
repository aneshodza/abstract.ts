/**
* An interface for a streamable object.
* Every ADT that implements this interface can be streamed.
* Consult the jsdocs of the implementing class for more
* information on how exactly streaming is implemented.
*
* @typeparam T - The type of the yielded value.
*/
interface Streamable<T> {
  /**
  * Returns a generator that can be used to stream the object.
  * @returns A generator that can be used to stream the object.
  * That generator is of type `Generator<T, void, unknown>`
  */
  stream(): Generator<T, void, unknown>;

  /**
  * Returns a generator that can be used to stream the object.
  * @returns A generator that can be used to stream the object.
  * That generator is of type `Generator<T, void, unknown>`
  */
  [Symbol.iterator](): Generator<T, void, unknown>;
}

export default Streamable;
