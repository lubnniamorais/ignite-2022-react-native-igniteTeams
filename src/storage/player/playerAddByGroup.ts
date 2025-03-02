import AsyncStorage from '@react-native-async-storage/async-storage';
import { PLAYER_COLLECTION } from '@storage/storageConfig';
import { AppError } from '@utils/AppError';

import { playersGetByGroup } from './playersGetByGroup';
import { PlayerStorageDTO } from './PlayerStorageDTO';

export async function playerAddGroup(
  newPlayer: PlayerStorageDTO,
  group: string,
) {
  // eslint-disable-next-line no-useless-catch
  try {
    const storedPlayers = await playersGetByGroup(group);

    // Verificando se já existe uma pessoa com o mesmo nome adicionado em algum grupo,
    // caso tenha não será permitido adicionar, pois uma mesma pessoa não pode fazer
    // parte de dois grupos.
    const playersAlreadyExists = storedPlayers.filter(
      (player) => player.name === newPlayer.name,
    );

    if (playersAlreadyExists.length > 0) {
      throw new AppError('Essa pessoa já está adicionada em um time.');
    }

    const storage = JSON.stringify([...storedPlayers, newPlayer]);

    await AsyncStorage.setItem(`${PLAYER_COLLECTION}-${group}`, storage);
  } catch (error) {
    throw error;
  }
}
