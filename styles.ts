import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    padding: 32,
    gap: 16,
  },
  input: {
    height: 40,
    borderWidth: 1,
    borderColor: '#333',
    borderRadius: 5,
    padding: 8,
  },
  button: {
    height: 40,
    backgroundColor: '#333',
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  text: {
    textAlign: 'center',
    fontSize: 18,
    fontWeight: 'bold',
  }
});
