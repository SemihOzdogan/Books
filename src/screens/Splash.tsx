import React, { useEffect } from 'react';
import { ActivityIndicator, StyleSheet } from 'react-native';
import { getBooksList } from '../store/actions/actions';
import { connect } from 'react-redux';
import { SafeAreaView } from 'react-native-safe-area-context';
import { NavigationProp } from '@react-navigation/native';
interface GetBooksProps {
  getBooksList: () => void;
  books: {
    data: any[];
    loading: boolean;
  };
  navigation: NavigationProp<any>;
}

const GetBooks: React.FC<GetBooksProps> = (props) => {

  useEffect(() => {
    props.getBooksList();
    if (!props.books.loading && props.books.data.length !== 0) {
      props.navigation.navigate('Home');
    }
  }, [props.books.loading]);

  return (
    <SafeAreaView style={styles.container}>
      {props.books.loading ? (
        <ActivityIndicator size="large" color="green" />
      ) : (
        <></>
      )}
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
});
const mapStateToProps = (state: any) => {
  return {
    books: state.books,
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    getBooksList: () => dispatch(getBooksList()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(GetBooks);