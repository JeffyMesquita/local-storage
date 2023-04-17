import { useEffect, useState } from 'react';
import { Text, TextInput, TouchableOpacity, View } from 'react-native';
import { styles } from './styles';
import { MMKV, useMMKV, useMMKVObject } from 'react-native-mmkv';

// const storage = new MMKV({
//   id: 'my-storage',
// });

interface User {
  name: string;
  email: string;
}

export default function App() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const [user, setUser] = useMMKVObject<User>('user');
  const storage = useMMKV({ id: 'my-storage' });

  const handleSave = () => {
    setUser({ name, email });
  };

  const fetchUser = () => {
    const data = storage.getString('user');

    setUser(data ? JSON.parse(data) : ({} as User));
  };

  useEffect(() => {
    const listener = storage.addOnValueChangedListener((changedKey) => {
      const newValue = storage.getString('user');

      fetchUser();
    });

    return () => {
      listener.remove();
    };
  }, []);

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Nome..."
        style={styles.input}
        onChangeText={setName}
        value={name}
      />
      <TextInput
        placeholder="E-mail..."
        style={styles.input}
        onChangeText={setEmail}
        value={email}
      />

      <TouchableOpacity
        style={styles.button}
        activeOpacity={0.6}
        onPress={handleSave}
      >
        <Text style={styles.buttonText}>Salvar</Text>
      </TouchableOpacity>

      <Text style={styles.text}>Nome: {user?.name}</Text>

      <Text style={styles.text}>E-mail: {user?.email}</Text>
    </View>
  );
}
