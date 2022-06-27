import {createSlice} from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: "toolkit",
    initialState: {
        countUser: 4,
        countCompany: 4,
        isAuth: false,
        students: [{
            id: 1,
            name: "Альберт",
            course: 3,
            company: "Kreosoft",
            surname: "Гибибнер",
            middleName: "Святославович",
            experience: "Ну че сказать, ровный пацан",
            achievements: "Принимал участие в создании платформы TikTok, за что меня ждет отдельный котел",
            email: "grandmaster@mail.ru",
            role: "Analytic"
        }, {
            id: 2,
            name: "Павел",
            course: 1,
            company: "NTR",
            surname: "Гааг",
            middleName: "Пашкевич",
            experience: "Играю в шахматы, курю махорку, создатель легендарного PashaBiceps",
            achievements: "Принимал участие в создании Яндекс.GO, таки поэтому оно такое дорогое",
            email: "pasha_biceps@mail.ru",
            role: "Frontend"
        }, {
            id: 3,
            name: "Андрей",
            course: 3,
            company: "KODE",
            surname: "Фролов",
            experience: "Атлет, миллиардер, плейбой",
            achievements: "Реализовал микросервис для отображения данных",
            middleName: "Валерьевич",
            email: "athletic_one_love@mail.ru",
            rest: "Прыгаю как кенгуру",
            role: "Backend"
        }, {
            id: 4,
            name: "Артем",
            course: 4,
            company: "ЦФТ",
            surname: "Калугин",
            experience: "Работаю не покладая рук",
            achievements: "Разаботал систему распознования по голосу",
            rest: "На чилле, на расслабоне",
            middleName: "Кириянович",
            email: "dungeon_master@mail.ru",
            role: "ML"
        },],
        companies: [{
            id: 1,
            name: "Kreosoft",
            info: "Передовая компания в производстве чего-то там"
        }, {
            id: 2,
            name: "NTR",
            info: "Лучшие сотрудники давно сбежали"
        }, {
            id: 3,
            name: "ЦФТ",
            info: "Основная деятельность ЦФТ связана с проектированием, разработкой и тиражированием решений для кредитно-финансовых организаций (АБС)," +
                "оказанием широкого спектра процессинговых услуг, IT-консалтингом и обучением банковских специалистов."
        }, {
            id: 4,
            name: "KODE aka red_mad_robot",
            info: "Мы разрабатываем сервисные мобильные приложения для бизнеса, банков, стартапов и жизни."
        },]
    },
    reducers: {
        addStudent(state, action) {
            state.countUser += 1
            action.payload = {...action.payload, id: state.countUser}
            state.students.push(action.payload)
        },
        addCompany(state, action) {
            state.countCompany += 1
            action.payload = {...action.payload, id: state.countCompany}
            state.companies.push(action.payload)
        },
        editUser(state, action){
            for (let i = 0; i < state.students.length; i++){
                if (action.payload.id === state.students[i].id)
                    state.students[i] = {...state.students[i], ...action.payload.data}
            }
        },
        auth(state){
            state.isAuth = true
        },
        logout(state){
            state.isAuth = false
        }
    }
})

export default userSlice.reducer
export const {addStudent, addCompany, editUser, auth, logout} = userSlice.actions