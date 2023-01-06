package java;

public class GenericSampleList<T> {

    private Object[] items;
    private int current;

    public GenericSampleList() {
        items = new Object[3];
        current = 0;
    }

    public void add(T item) {
        items[current++] = item;
    }

    public T get(int index) {
        if (current <= index)
            throw new IndexOutOfBoundsException();

        return (T) items[index];
    }

    public int size() {
        return current;
    }

    public void clear() {
        current = 0;
    }

}