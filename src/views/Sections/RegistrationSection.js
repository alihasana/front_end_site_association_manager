import React from "react";
import classNames from "classnames";
import { makeStyles } from "@material-ui/core/styles";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import CustomInput from "components/CustomInput/CustomInput.js";
import NavPills from "components/NavPills/NavPills.js";
import dataJson from 'service/data/dataJsonDidacticiel.json';
import styles from "assets/jss/material-kit-react/views/landingPageSections/registerStyle.js";
import DidactModal from "components/DidactModal/DidactModal";
import Joi from "@hapi/joi";

const useStyles = makeStyles(styles);

export default function RegistrationSection() {
    const classes = useStyles();

    const classseImage = classNames(
        classes.imgRaised,
        classes.imgRounded,
        classes.crop
    )
    const [selectedEnabled, setSelectedEnabled] = React.useState('');
    const [inputError, setError] = React.useState('');
    const [inputErrorId, setErrorId] = React.useState('');
    const handleDataInput = async data => {
        let inputId = data.target.id
        let inputValue = data.target.value
        console.log(inputValue);
        let question = getQuestion(inputId)
        let input = getInput(inputId)
        if (inputId === '1') {
            let {error, value} = await Joi.string().min(5).max(50).required().validate(inputValue);
            if (error || value.replace(/<[^>]+>|\s/g, '') === '') {
                await setError("Le nom de association est obligatoire. Le texte doit contenir moins de 50 caractères et plus de 5 caractères")
                await handleInput(Number(inputId), question, '', input);
            } else {
                await setError("");
                await setErrorId(inputId)
                await handleInput(Number(inputId), question, (value.replace(/<[^>]+>/g, '')).trim(), input);
            }
        }
        if (inputId === '2') {
            let {error, value} = await Joi.string().min(2).max(50).required().validate(inputValue);
            if (error || value.replace(/<[^>]+>|\s/g, '') === '') {
                await setError("Le nom est obligatoire. Le texte doit contenir moins de 50 caractères et plus de 2 caractères")
                await setErrorId(inputId);
                await handleInput(Number(inputId), question, '', input)
            } else {
                await setError("");
                await setErrorId("");
                await handleInput(Number(inputId), question, (value.replace(/<[^>]+>/g, '')).trim(), input);
            }
        }
        if (inputId === '3') {
            let {error, value} = await Joi.string().min(2).max(50).required().validate(inputValue);
            if (error || value.replace(/<[^>]+>|\s/g, '') === '') {
                await setError("Le prénom est obligatoire. Le texte doit contenir moins de 50 caractères et plus de 2 caractères")
                await setErrorId(inputId);
                await handleInput(Number(inputId), question, '', input)
            } else {
                await setError("");
                await setErrorId("");
                await handleInput(Number(inputId), question, (value.replace(/<[^>]+>/g, '')).trim(), input);
            }
        }
        if (inputId === '4') {
            let {error, value} = await Joi.number().integer().min(13).max(99).required().validate(inputValue);
            if (error) {
                console.log('error')
                await setError("L'age est obligatoire. L'age doit contenir plus de 12 ans et mois de 100 ans")
                await setErrorId(inputId)
                await handleInput(Number(inputId), question, '', input);
            } else {
                await setError("");
                await setErrorId("");
                await handleInput(Number(inputId), question, value, input);
            }
        }
        if (inputId === '5') {
            let {error, value} = await Joi.string().email({tlds: {allow: false}}).required().validate(inputValue);
            if (error || value.replace(/<[^>]+>|\s/g, '') === '') {
                await setError("Le email est obligatoire");
                await setErrorId(inputId)
                await handleInput(Number(inputId), question, '', input);
            } else {
                await setError("");
                await setErrorId("")
                await handleInput(Number(inputId), question, (value.replace(/<[^>]+>/g, '')).trim(), input);
            }
        }
        if (inputId === '6') {
            let {error, value} = Joi.string().required().min(8).max(15).label('Password').validate(inputValue);
            if (error || value.replace(/<[^>]+>|\s/g, '') === '') {
                await setError("Le Mot de passe est  doit contenir moins de 15 caractères et plus de 8 caractères")
                await setErrorId(inputId);
                await handleInput(Number(inputId), question, '', input)
            } else {
                await setError("");
                await setErrorId("");
                await handleInput(Number(inputId), question, (value.replace(/<[^>]+>/g, '')).trim(), input);
            }
        }
    };
    const getQuestion = (id) => {
        for (const data of dataJson.data) {
            if (data.id === Number(id)) {
                return data.question
            }
        }
    }
    const getInput = (id) => {
        for (const data of dataJson.data) {
            if (data.id === Number(id)) {
                return data.input
            }
        }
    }

    const handleInput = async (id, question, response, input, cssStyleId = null) => {
        console.log(id, question, response)
        const dataToAdd = {id, question, response, cssStyleId, input}
        let data = localStorage.getItem('registration');
        if (data) {
            let items = JSON.parse(data);
            let verifyDuplicate = checkData(dataToAdd.id, items)
            console.log(verifyDuplicate);
            if (verifyDuplicate) {
                let index = items.findIndex(x => x.id === dataToAdd.id);
                items[index].response = dataToAdd.response
                items[index].cssStyleId = dataToAdd.cssStyleId
                localStorage.setItem('registration', JSON.stringify(items))
                console.log(checkData(dataToAdd.id, items));
            } else {
                items.push(dataToAdd);
                localStorage.setItem('registration', JSON.stringify(items))
            }
        } else {
            localStorage.setItem('registration', JSON.stringify([dataToAdd]))
        }
        if (id === 7) {
            if (response === '') {
                await setError("Le type d'association est obligatoire.")
            } else {
                await setError("");
                await setErrorId(id)
            }
        }
        if (id === 8) {
            if (response === '') {
                console.log('error')
                await setError("Input est obligatorie")
                await setErrorId(id)

            } else {
                await setError("");
                await setErrorId("");
            }
        }

        if (id === 9) {

            if (response === '') {
                await setError("Input est obligatorie");
                await setErrorId(id)
            } else {
                await setError("");
                await setErrorId("")
            }
        }
        if (id === 10) {
            console.log(response);
            if (response === '' || response === 'Non') {
                await setError("Veuillez vous accepter condition, si vous souhaite continuer")
                await setErrorId(id);
            } else {
                await setError("");
                await setErrorId("");
            }
        }
    }
    const checkData = (dataID, items) => {
        let response = false;
        for (const item of items) {
            if (item.id === dataID) {
                response = true
            }
        }
        return response
    }
    const cssStyle = (id) => {
        let data = localStorage.getItem('registration');
        if (data) {
            let items = JSON.parse(data);
            return checkCss(id, items)
        }
        return null;
    }
    const checkCss = (cssStyleId, items) => {
        let response = false;
        for (const item of items) {
            if (item.cssStyleId === cssStyleId) {
                response = true
            }
        }
        return response
    }

    const inputIsMust = (message) => {
        console.log('message')
        console.log(message)
        return(<div style={{color: '#db2269', fontSize: '15px', display: 'relative'}}>
            {message}
            <br/>
            <br/>
        </div>)
    }


  const dataFormQ =
   <NavPills
      tabs= {dataJson.data.map(data => {
        // If the field choix is an empty array so an input type text is activited
        if (data.choix.length===0)
        return {
          tabButton: data.id.toString(),
          tabContent: (
            <GridContainer className={classes.container} data-question-id={data.id} key={data.id.toString()}>
              <div className={classes.typo}>
                <h2 className={classes.title}>{data.question}</h2>
                <h3>{}</h3>
              </div>
              <DidactModal active={NavPills.active} info={data.info} />
                <GridItem xs={12} key={data.id} data-answer-id={data.id} data-answer-weight="300">
                <CustomInput
                labelText={data.question}
                id= {data.id.toString()}
                formControlProps={{
                  fullWidth: true
                }}
                error={!(inputError === "") || (NavPills.error === "")}
                inputProps={{
                    type: data.type,
                    onChange: handleDataInput
                }}
              />
                    {
                        (!(inputError === "")) ? inputIsMust(inputError) : ""
                    }
              </GridItem>
          </GridContainer>
          )
        }
        else
        return {
          tabButton: data.id.toString(),
          tabContent: (
            <GridContainer className={classes.container} data-question-id={data.id} key={data.id.toString()}>
              <div className={classes.typo}>
                <h2 className={classes.title}>{data.question}</h2>
              </div>
              <GridContainer className={classes.container}>
              {data.choix.map((element,index) => {
                let smValue = 6
                if (data.choix.length>=3){
                    smValue = 4
                }
                return <GridItem xs={12} sm={smValue} key={index} className={classes.margin} data-answer-id={index} data-answer-weight="300">
                  <div className={classseImage}
                       onClick={() => setSelectedEnabled(data.id.toString()+""+index)}
                  >
                    <img className={
                        (cssStyle(data.id.toString()+""+index) || selectedEnabled === data.id.toString()+""+index)
                            ? classes.imgActive
                            : classes.image}
                         onClick={() => handleInput(data.id, data.question, data.choix[index], data.input, data.id.toString()+""+index)}
                         src={data.imageUrl[index]}
                         alt={data.choix[index]}/>
                  </div>
              <span className="answer-text">{element}</span>
                </GridItem>
                }
            )}
                  {
                      (!(inputError === "")) ? inputIsMust(inputError) : ""
                  }

            </GridContainer>
          </GridContainer>
          )
        }
      })
      }
    />
  return (
    <GridContainer className={classes.container}>
      <GridItem>
        {dataFormQ}
      </GridItem>
    </GridContainer>
  );
}
