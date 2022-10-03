import { useState } from 'react';
import { FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native'

import { Button } from '@components/Button';
import { Header } from '@components/Header';
import { GroupCard } from '@components/GroupCard';
import { Highlight } from '@components/Highlight';
import { EmptyList } from '@components/EmptyList';

import { Container } from './styles';


export function Groups() {
  const [groups, setGroups] = useState<string[]>([])
  const navigation = useNavigation()

  function handleCreateNewGroup(){
    navigation.navigate('new')
  }

  return (
    <Container>
      <Header />

      <Highlight 
        title="Turmas" 
        subtitle="Jogue com a sua turma" />

      <FlatList 
        data={groups}
        keyExtractor={item => item}
        renderItem={({item}) => (
          <GroupCard 
            title={item} 
          />
        )}
        contentContainerStyle={groups.length === 0 && {flex: 1}}
        ListEmptyComponent={() => (
          <EmptyList 
            message='Que tal cadastrar a primeira turma?' 
          />
        )}
      />

      <Button 
        title="Criar nova turma" 
        onPress={handleCreateNewGroup}
      />

    </Container>
  );
}

