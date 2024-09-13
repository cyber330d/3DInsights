// utils/idb.ts
export async function getModelFromDB(modelUrl: string): Promise<Blob | null> {
  const db = await openDatabase();
  const tx = db.transaction("models", "readonly");
  const store = tx.objectStore("models");
  return store.get(modelUrl);
}

export async function saveModelToDB(modelUrl: string, modelBlob: Blob) {
  const db = await openDatabase();
  const tx = db.transaction("models", "readwrite");
  const store = tx.objectStore("models");
  store.put(modelBlob, modelUrl);
  await tx.done;
}

async function openDatabase() {
  if (!("indexedDB" in window)) {
    throw new Error("This browser doesn't support IndexedDB");
  }
  return new Promise<IDBDatabase>((resolve, reject) => {
    const request = indexedDB.open("3DModelDB", 1);
    request.onupgradeneeded = function () {
      const db = request.result;
      db.createObjectStore("models");
    };
    request.onsuccess = () => resolve(request.result);
    request.onerror = () => reject(request.error);
  });
}
