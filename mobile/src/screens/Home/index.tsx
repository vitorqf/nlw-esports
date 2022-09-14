import { Image, View, FlatList } from 'react-native';

import logoImg from '../../assets/logo-nlw-esports.png';
import { GameCard } from '../../components/GameCard';
import { Heading } from '../../components/Heading';
import { GAMES } from '../../utils/games';
import { styles } from './styles';

export function Home() {
  return (
    <View style={styles.container}>
      <Image source={logoImg} style={styles.logo} />

      <Heading title="Find your duo!" subtitle="Choose the game..." />

      <FlatList contentContainerStyle={styles.contentList} data={GAMES} keyExtractor={item => item.id} renderItem={({ item }) => <GameCard data={item} />} horizontal showsHorizontalScrollIndicator={false} />
    </View>
  );
}