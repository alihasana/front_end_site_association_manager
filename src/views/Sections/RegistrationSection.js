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
    const handleDataInput = async data => {
        let inputId = data.target.id
        let inputValue = data.target.value
        let question = getQuestion(inputId)
        if(inputId === '2') {
            let {error, value} = await Joi.string().min(5).max(50).required().validate(inputValue);
            if (error || value.replace(/<[^>]+>|\s/g, '') === '') {
                await setError("Le nom de association est obligatoire. Le texte doit contenir moins de 50 caractères et plus de 5 caractères")
                handleInput(Number(inputId), question, '');
            } else {
                await setError("");
                handleInput(Number(inputId), question, (value.replace(/<[^>]+>/g, '')).trim());
            }
        }
        if(inputId === '7') {
            let {error, value} = await Joi.number().integer().min(13).max(99).required().validate(inputValue);
            if (error){
                console.log('error')
                await setError("L'age est obligatoire. L'age doit contenir plus de 12 ans et mois de 100 ans")
                handleInput(Number(inputId), question, '');
            } else {
                await setError("");
                handleInput(Number(inputId), question, value);
            }
        }

        if(inputId === '6') {
            let {error, value} = await Joi.string().email({ tlds: { allow: false } }).required().validate(inputValue);
            if (error || value.replace(/<[^>]+>|\s/g, '') === '') {
                await setError("Le email est obligatoire")
                handleInput(Number(inputId), question, '');
            } else {
                await setError("");
                handleInput(Number(inputId), question, (value.replace(/<[^>]+>/g, '')).trim());
            }
        }
        if(inputId === '5') {
            let {error, value} = await Joi.string().min(2).max(50).required().validate(inputValue);
            if (error || value.replace(/<[^>]+>|\s/g, '') === '') {
                await setError("Le nom est obligatoire. Le texte doit contenir moins de 50 caractères et plus de 2 caractères")
                handleInput(Number(inputId), question, '')
            } else {
                await setError("");
                handleInput(Number(inputId), question, (value.replace(/<[^>]+>/g, '')).trim());
            }
        }
    };
    const getQuestion= (id) => {
        for (const data of dataJson.data) {
            if (data.id === Number(id)) {
                return data.question
            }
        }
    }

  const handleInput =  (id, question, response, cssStyleId = null) => {
      console.log(id, question, response)
      const dataToAdd = {id, question, response, cssStyleId}
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
                error={!(inputError === "")}
                inputProps={{
                    type: data.type,
                    onChange: handleDataInput
                }}
              />
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
                         onClick={() => handleInput(data.id, data.question, data.choix[index], data.id.toString()+""+index)}
                         src={data.imageUrl[index]}
                         alt={data.choix[index]}/>
                  </div>
              <span className="answer-text">{element}</span>
                </GridItem>
                }
            )}
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
