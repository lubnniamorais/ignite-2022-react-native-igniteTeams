import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Groups } from '@screens/Groups';
import { NewGroup } from '@screens/NewGroup';
import { Players } from '@screens/Players';

// Cada screen equivale a um rota
const { Navigator, Screen } = createNativeStackNavigator();

export function AppRoutes() {
  return (
    <Navigator>
      <Screen name="groups" component={Groups} />

      <Screen name="new" component={NewGroup} />

      <Screen name="players" component={Players} />
    </Navigator>
  );
}
