import { useState } from 'react'
import { View, StyleSheet, SafeAreaView, FlatList, TextInput, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux'
import FontAwesome from '@expo/vector-icons/FontAwesome5';
import BookItem from '../components/BookItem';
// import analytics from '@react-native-firebase/analytics';

interface Book {
  title: string;
  author: string;
  publicationYear: number;
}

interface HomeProps {
  books: {
    data: Book[];
  };
}


const Home: React.FC<HomeProps> = (props: any) => {

  const {
    container,
    headerContainer,
    headerSubContainer,
    headerIconContainer,
    hedaerBtnContainer,
    textInput,
  } = styles,
    [text, setText] = useState<string>(''),
    [tempData, setTempData] = useState<Book[]>(props.books.data),

    searchFilterFunction = (text: string) => {
      setText(text);
      const searchText = text.toLowerCase();
      const filteredData = props.books.data.filter((item: any) => {
        const bookTitle = item.title.toLowerCase();
        const authorName = item.author.toLowerCase();
        return bookTitle.includes(searchText) || authorName.includes(searchText);
      });
      setTempData(filteredData);
    },

    sortList = async (val: 'asc' | 'desc') => {
      // await analytics().logEvent('deneme', {
      //   id: 3333,
      //   item: 'Expo rocks!',
      //   description: 'facebook',
      //   size: "L"
      // });
      const sortData = [...tempData];
      if (val === "asc") {
        sortData.sort((a, b) => a.publicationYear - b.publicationYear);
      } else if (val === "desc") {
        sortData.sort((a, b) => b.publicationYear - a.publicationYear);
      }
      setTempData(sortData);
    };

  return (
    <SafeAreaView style={container}>
      <FlatList
        data={tempData}
        keyExtractor={(item, index) => index.toString()}
        ListHeaderComponent={
          <View style={headerContainer}>
            <View style={headerSubContainer}>
              <TextInput
                value={text}
                onChangeText={val => searchFilterFunction(val)}
                placeholder="Search"
                placeholderTextColor="#bbb"
                style={textInput}
              />
            </View>
            <View style={headerIconContainer}>
              <TouchableOpacity onPress={() => sortList("asc")} style={hedaerBtnContainer}>
                <FontAwesome name="arrow-up" size={25} color="#aaa" />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => sortList("desc")} style={hedaerBtnContainer}>
                <FontAwesome name="arrow-down" size={25} color="#aaa" />
              </TouchableOpacity>
            </View>
          </View>
        }
        renderItem={({ item }) =>
          <BookItem
            title={item.title}
            author={item.author}
            publicationYear={item.publicationYear}
          />
        }
      />
    </SafeAreaView>
  )
};
const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "white" },
  headerContainer: { padding: 5, paddingBottom: 3, height: 50, flexDirection: "row" },
  headerSubContainer: { flex: 3, borderRadius: 4, borderColor: "#bbb", borderWidth: 1.2 },
  headerIconContainer: { flex: 1, alignItems: "center", justifyContent: "center", flexDirection: "row", },
  hedaerBtnContainer: { backgroundColor: "#ccc", minHeight: 40, minWidth: 40, padding: 5, borderRadius: 4, alignItems: "center", marginLeft: 5 },
  textInput: { top: 5, left: 10 },
});

const mapStatetoprops = (state: any) => {
  return {
    books: state.books
  }
}

export default connect(mapStatetoprops)(Home);