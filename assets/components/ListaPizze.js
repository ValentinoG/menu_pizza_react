import React from 'react';
import { StyleSheet, Text, View, FlatList, Image} from 'react-native';

class ListaPizze extends React.Component{


	_renderItem=({item})=>(//Sistemare in un altro metodo per migliorare la leggibilita del codice
		
		<View style={styles.item}>

			<View style={styles.itemText}>

				<Text>Pizza: {item.nome}</Text>

				<View style={{flexDirection:'row'}}>
				<Text>Ingredienti: </Text>
					{	
						item.ingredienti.map((value,key) =>
						(
							<Text key={key}>{`${value},`} </Text>
							//sistemare virgola alla fine
							//sistemare caso ingredienti troppo multipli

						)
					)}
				</View>

				<Text>Prezzo: € {item.prezzo.toFixed(2)}</Text>

			</View>

			<View style={styles.imageItem} >
				<Image style={styles.imageDim} source={item.immagine}/>
			</View>

		</View>
		)
	 _keyExtractor = (item, index) => item.nome;
	render(){
		 let listaPizze=[
						{
							"nome":"Margherita",
							"ingredienti":["salsa","mozzarella","olio"],
							"prezzo":4,
							"immagine":require('../images/margherita.jpeg')
						},
						{
							"nome":"Capricciosa",
							"ingredienti":["salsa","mozzarella","prosciutto cotto", "funghi", "uovo", "piselli"],
							"prezzo":7,
							"immagine":require('../images/capricciosa.jpeg')
						},
						{
							"nome":"4 Formaggi",
							"ingredienti":["mozzarella","gorgonzola","svizzero","provola"],
							"prezzo":8,
							"immagine":require('../images/4formaggi.jpeg')
						}
					];

		return(
				<View style={styles.flatStyle}>
					<FlatList data={listaPizze} renderItem={this._renderItem} keyExtractor={this._keyExtractor}/>
				</View>
		);
	}

}

const styles=StyleSheet.create({
	item:{
		flex:1,
		flexDirection:'row',
		backgroundColor:'#d4d4',
		borderColor:'#efe',
		borderBottomWidth:30, // artificio Valentiniano per separare gli item. Correggere!!!
	},
	imageDim:{
		width:200,
		height:200,
		borderRadius:10
	},
	itemText:{
		flex:2,
		borderEndColor:'black',
		borderEndWidth:2
	},
	imageItem:{
		flex:1,
		alignItems:'flex-end'
	},
	flatStyle:{
		flex:1
	}

});

export default ListaPizze;