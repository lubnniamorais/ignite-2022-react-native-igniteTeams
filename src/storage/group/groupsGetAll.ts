import AsyncStorage from '@react-native-async-storage/async-storage';
import { GROUP_COLLECTION } from '@storage/storageConfig';

export async function groupsGetAll() {
  // eslint-disable-next-line no-useless-catch
  try {
    // Aqui estamos buscando informações que estão salvas no dispositivo do usuário
    const storage = await AsyncStorage.getItem(GROUP_COLLECTION);

    // Aqui estamos verificando se o valor retornado é nulo, se for, retornamos um
    // array vazio, caso contrário, retornamos o valor armazenado na variável storage
    const groups: string[] = storage ? JSON.parse(storage) : [];

    return groups;
  } catch (error) {
    throw error;
  }
}
