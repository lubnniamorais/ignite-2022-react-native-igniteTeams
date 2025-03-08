import AsyncStorage from '@react-native-async-storage/async-storage';
import { GROUP_COLLECTION, PLAYER_COLLECTION } from '@storage/storageConfig';

import { groupsGetAll } from './groupsGetAll';

export async function groupRemoveByName(groupDeleted: string) {
  // eslint-disable-next-line no-useless-catch
  try {
    const storedGroups = await groupsGetAll();

    // Retorna todos os grupos, exceto o que queremos deletar.
    const groups = storedGroups.filter((group) => group !== groupDeleted);

    // Aqui estamos sobreescrevendo a chave armazenada, com todos os grupos,
    // exceto o que deletamos
    await AsyncStorage.setItem(GROUP_COLLECTION, JSON.stringify(groups));

    // Aqui estamos removendo uma chave inteira, pois não faz sentido armazenar jogadores
    // de um grupo deletado.
    await AsyncStorage.removeItem(`${PLAYER_COLLECTION}-${groupDeleted}`);
  } catch (error) {
    throw error;
  }
}
