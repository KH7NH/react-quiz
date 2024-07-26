import { useEffect } from "react"
import { useParams } from "react-router-dom"
import { getDataQuiz } from "../../services/apiService"
import _ from 'lodash'

const DetailQuiz = () => {
    const params = useParams()
    const quizId = params.id

    useEffect(() => {
        fetchQuestions()
    }, [quizId])
    const fetchQuestions = async () => {
        let res = await getDataQuiz(quizId)
        if (res && res.EC === 0) {
            let raw = res.DT
            let data = _.chain(raw)
                .groupBy('id')
                .map((value, key) => {
                    let answers = []
                    let questionsDescription, image = null
                    value.forEach((item, index) => {
                        if (index === 0) {
                            questionsDescription = item.description
                            image = item.image
                        }
                        answers.push(item.answers)
                    })
                    return { questionId: key, answers, questionsDescription, image }
                })
                .value()
        }
    }
    return (
        <div className="detail-quiz-container">
            Detail
        </div>
    )
}
export default DetailQuiz