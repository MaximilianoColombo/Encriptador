import useLocalStorageState from 'use-local-storage-state';
import { encryptText } from '../functions/Utils';

//custom hook that handles the local storage

export function useItems(key = 'items', values = []) {
  const [items, setItems] = useLocalStorageState(key, {
    defaultValue: values,
  });

  const addItem = (newItemText, newItemPassword) => {
    const id = new Date().getTime();
    const updatedItems = [...items, { id, originalText: newItemText, password: newItemPassword, encryptedText: encryptText(newItemText) }];
    setItems(updatedItems);
  };

  const removeItem = (id) => {
    const updatedItems = items.filter((item) => item.id !== id);
    setItems(updatedItems);
  };

  return {
    items,
    addItem,
    removeItem,
  };
}
