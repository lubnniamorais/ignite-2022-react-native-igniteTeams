import AsyncStorage from '@react-native-async-storage/async-storage';
import { GROUP_COLLECTION } from '@storage/storageConfig';
import { AppError } from '@utils/AppError';

import { groupsGetAll } from './groupsGetAll';

export async function groupCreate(newGroupName: string) {
  // eslint-disable-next-line no-useless-catch
  try {
    const storedGroups = await groupsGetAll();

    // Verificando se já existe um grupo com aquele nome no storage.
    const groupAlreadyExists = storedGroups.includes(newGroupName);

    if (groupAlreadyExists) {
      throw new AppError('Group already exists');
    }

    const storage = JSON.stringify([...storedGroups, newGroupName]);

    await AsyncStorage.setItem(GROUP_COLLECTION, storage);
  } catch (error) {
    throw error;
  }
}
