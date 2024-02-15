import { expect, test } from "vitest";
import { Answer } from "../entities/answer";
import { AnswersRepository } from "../repositories/answers-repository";
import { AnswerQuestionUseCase } from "./answer-question";

const fakeAnswersRepository: AnswersRepository = {
  create: async function (answer: Answer): Promise<void> {
    return;
  },
};

test("create an answer", async () => {
  const answerQuestion = new AnswerQuestionUseCase(fakeAnswersRepository);

  const answer = await answerQuestion.execute({
    content: "Conteúdo",
    instructorId: "1",
    questionId: "1",
  });

  expect(answer.content).toEqual("Conteúdo");
});
