import React, { Component } from 'react';
import './Quiz.css';

class Quiz extends Component {
	constructor(props) {
    super(props);
    this.state = {
			questions: [
				{question:'Wie hoch über dem Boden schweben die Kabinen maximal?',answers:['67 m','87 m','107 m'],richtig:2,right:'Stimmt, es sind 107 Meter.',wrong:'Nein, es sind mehr: 107 Meter.'},
				{question:'Wie lang ist die längste Spannweite zwischen zwei Masten?',answers:['1020 m','1220 m','1520 m'],richtig:1,right:'Genau! Zwischen den Masten 4 und 5 beträgt die Spannweite 1220 m.',wrong:'Leider nein. Zwischen den Masten 4 und 5 beträgt die Spannweite 1220 m.'},
				{question:'Mit wie viel Gewicht wird das Zugseil gespannt?',answers:['8 t','16 t','26 t'],richtig:2,right:'Genau! Das Zugseil wird an der Talstation mit einem Gewicht von 26 Tonnen gespannt.',wrong:'Nein, es ist mehr: Das Zugseil wird an der Talstation mit einem Gewicht von 26 Tonnen gespannt.'},
				{question:'Die Tragseile (knapp 7 km) dehnen sich bei Wärme aus. Um wie viele Meter von Winter bis Sommer?',answers:['5 m','20 m',' 40 m'],richtig:0,right:'Stimmt! Der Temperaturdehnungskoeffizient von Stahl beträgt 0,012 mm/m K. Bei 60 °C Temperaturdifferenz und einer Länge von 6940 Metern ergibt das ungefähr 5 Meter.',wrong:'Nein, es ist weniger: Der Temperaturdehnungskoeffizient von Stahl beträgt 0,012 mm/m K. Bei 60 °C Temperaturdifferenz und einer Länge von 6940 Metern ergibt das ungefähr 5 Meter.'},
				{question:'Mit was wird der Eiger Express angetrieben?',answers:['Strom','Diesel','Kohle'],richtig:0,right:'Richtig! Der Eiger Express wird von vier Elektromotoren angetrieben. Diese befinden sich an der Bergstation.',wrong:'Leider falsch. Der Eiger Express wird von vier Elektromotoren angetrieben. Diese befinden sich an der Bergstation.'},
			],
			buttonData: 
				{
					'group0': {'btn':['btnactive','btnactive','btnactive'],'stat':[1],'solution':''},
					'group1': {'btn':['btnactive','btnactive','btnactive'],'stat':[1],'solution':''},
					'group2': {'btn':['btnactive','btnactive','btnactive'],'stat':[1],'solution':''},
					'group3': {'btn':['btnactive','btnactive','btnactive'],'stat':[1],'solution':''},
					'group4': {'btn':['btnactive','btnactive','btnactive'],'stat':[1],'solution':''},		
				}
			}
		}
	verify = (question,answer) => {
		//find color of buttons
		let buttonClass = [];
		for (let i = 0; i<3;i++) {
			let tmp = 'btnpassive';
			if (i===answer) {
				tmp = 'btnwrong'
			};
			if (i===this.state.questions[question].richtig) {
				tmp = 'btnright'
			};
			buttonClass.push(tmp);
		}
		//find solution
		let solution = (answer===this.state.questions[question].richtig) ? this.state.questions[question].right : this.state.questions[question].wrong
		//set Stat
		let newButtonData = this.state.buttonData;
		newButtonData['group'+question] = {'btn':buttonClass,'stat':0,'solution':solution};
		this.setState ({buttonData:newButtonData});
  }
	
  render() {
		let collected = this.state.questions.map((item,index) => {
			//find buttons
			let buttons = item.answers.map((q,i) => {
				return <div position={i} key={i} id={i+index} className={this.state.buttonData['group'+index].btn[i]} onClick={()=> this.state.buttonData['group'+index].stat ? this.verify(index,i) : ''}>{q}</div>
			})
		 
			//return question, buttons and solution			
			return <div key={index}><p>{item.question}</p><div className='btnbar'>{buttons}</div><p className={this.state.buttonData['group'+index].solution === '' ? 'solution' : 'solution fade-in'}>{this.state.buttonData['group'+index].solution}</p></div>
		})

		return (
      <div className='element'><h1>Schätzen Sie!</h1><div>{collected}</div></div>
    );
    }
  }
export default Quiz;