// lib/idb.ts
export async function getModelFromDB(modelUrl: string): Promise<Blob | null> {
  const db = await openDatabase();
  const tx = db.transaction("models", "readonly");
  const store = tx.objectStore("models");

  return new Promise((resolve, reject) => {
    const request = store.get(modelUrl);

    request.onsuccess = () => {
      const result = request.result;
      if (result) {
        resolve(result as Blob); // Ensure the result is treated as a Blob
      } else {
        resolve(null); // If not found, return null
      }
    };

    request.onerror = () => {
      reject(request.error);
    };
  });
}

export async function saveModelToDB(modelUrl: string, modelBlob: Blob) {
  const db = await openDatabase();
  const tx = db.transaction("models", "readwrite");
  const store = tx.objectStore("models");

  return new Promise<void>((resolve, reject) => {
    const request = store.put(modelBlob, modelUrl);

    request.onsuccess = () => resolve();
    request.onerror = () => reject(request.error);
  });
}

async function openDatabase(): Promise<IDBDatabase> {
  if (!("indexedDB" in window)) {
    throw new Error("This browser doesn't support IndexedDB");
  }

  return new Promise((resolve, reject) => {
    const request = indexedDB.open("3DModelDB", 1);

    request.onupgradeneeded = () => {
      const db = request.result;
      db.createObjectStore("models");
    };

    request.onsuccess = () => resolve(request.result);
    request.onerror = () => reject(request.error);
  });
}
