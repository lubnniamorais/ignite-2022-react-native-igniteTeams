import { playersGetByGroup } from './playersGetByGroup';

export async function playersGetByGroupAndTeam(group: string, team: string) {
  // eslint-disable-next-line no-useless-catch
  try {
    // Filtrando pelo grupo, por exemplo o grupo da Rocketseat
    const storage = await playersGetByGroup(group);

    // Filtrando pelo time, por exemplo o time A
    const players = storage.filter((player) => player.team === team);

    return players;
  } catch (error) {
    throw error;
  }
}
