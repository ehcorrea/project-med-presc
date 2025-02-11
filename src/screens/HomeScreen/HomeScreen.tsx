import { ScrollView, View } from 'react-native';
import { FontAwesome6, MaterialIcons } from '@expo/vector-icons';

import {
  Spancing,
  Layout,
  Text,
  CardSquare,
  CardSimulation,
  SearchBar,
  AvatarProfile,
  HeaderUser,
} from '@/components';

import * as S from './HomeScreen.styles';
import { router } from 'expo-router';

export function HomeScreen() {
  return (
    <Layout>
      <HeaderUser />
      <ScrollView className="flex-1">
        <View className="p-[5%]">
          <SearchBar
            button={
              <S.FilterButton
                onPress={() => router.push('/remedios/cadastrar-pessoal')}
              >
                <S.FilterIcon name="sound-mix" />
              </S.FilterButton>
            }
          />
          <Spancing y={10} />

          <Spancing y={10} />
          <Text weight="semi" size="xlarge">
            Informações
          </Text>
          <Spancing y={8} />
          <View className="flex-row justify-between">
            <CardSquare
              label="Simulações"
              info="123"
              icon={<FontAwesome6 name="chart-line" color="white" size={24} />}
            />
            <CardSquare
              label="Vendas"
              info="20"
              icon={
                <FontAwesome6 name="chart-simple" color="white" size={24} />
              }
            />
            <CardSquare
              label="Lucro"
              info="R$ 9k"
              icon={<FontAwesome6 name="sack-dollar" color="white" size={24} />}
            />
          </View>
          <Spancing y={10} />
          <View className="flex-row justify-between items-end">
            <Text weight="semi" size="xlarge">
              Próximos remédios
            </Text>
            <Text palette="primary">ver mais</Text>
          </View>

          <Spancing y={8} />
          <CardSimulation
            title="Ana Paula Rogrigues"
            content="Paracetamol as 16:55"
            icon={<MaterialIcons name="emoji-people" size={30} color="white" />}
          />
          <Spancing y={5} />
          <CardSimulation
            title="Ana Paula Rogrigues"
            content="Paracetamol as 16:55"
            icon={<MaterialIcons name="emoji-people" size={30} color="white" />}
          />
          <Spancing y={5} />
          <CardSimulation
            title="Ana Paula Rogrigues"
            content="Paracetamol as 16:55"
            icon={<AvatarProfile name="Ana Paula Rogrigues" />}
          />
          <Spancing y={5} />
          <CardSimulation
            title="Ana Paula Rogrigues"
            content="Paracetamol as 16:55"
            icon={<MaterialIcons name="emoji-people" size={30} color="white" />}
          />
        </View>
      </ScrollView>
    </Layout>
  );
}
