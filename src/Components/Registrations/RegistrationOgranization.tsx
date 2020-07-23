import * as React from 'react'
/* classes */
import classes from './style.module.scss'
import { templates } from './templates'
/* === */
interface IRegistrationOgranizationProps {}
interface IRegistrationOgranizationState {
  [key: string]: string
  name: string
  mnemo: string
  inn: string
  kpp: string
  actAddress: string
  legAddress: string
  phone: string
  email: string
}
export class RegistrationOgranization extends React.PureComponent<
  IRegistrationOgranizationProps,
  IRegistrationOgranizationState
> {
  constructor(props: IRegistrationOgranizationProps) {
    super(props)
    this.state = {
      name: 'name',
      mnemo: 'mnemo',
      inn: '',
      kpp: '',
      actAddress: 'actAddress',
      legAddress: 'legAddress',
      phone: 'phone',
      email: 'email',
    }
    this.handleChange = this.handleChange.bind(this)
  }
  handleChange = (t: string) => (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const {
      currentTarget: { name, value },
    } = event
    return this.setState((prevState) => {
      if (t === 'number' && !isNaN(Number(value))) {
        return {
          ...prevState,
          [name]: `${Math.abs(Number(value))}`,
        }
      }
      if (t === 'text') {
        return {
          ...prevState,
          [name]: value,
        }
      }
    })
  }
  handleSubmit = (event: React.ChangeEvent<HTMLFormElement>) => {
    event.preventDefault()
  }
  render() {
    return (
      <section className={classes.root}>
        <form className={classes.root__form} onSubmit={this.handleSubmit}>
          <h1>Регистрация организации</h1>
          {Array.isArray(templates) &&
            templates.map((t, index) => {
              const { name, type, label, maxLength } = t
              return (
                <div key={index} className={classes.root__form__input_wrap}>
                  <label htmlFor={name}>{label}</label>
                  <input
                    id={name}
                    name={name}
                    type="text"
                    maxLength={maxLength}
                    value={this.state[name]}
                    onChange={this.handleChange(type)}
                  />
                </div>
              )
            })}
          <div className={classes.root__form__actions}>
            <button>Зарегистрировать</button>
          </div>
        </form>
      </section>
    )
  }
}
