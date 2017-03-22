(function (imports) {

  'use strict';

  var it = {};

  module.exports = {

    run: function () {
      it.bootstrapData.forEach(function (properties) {
        imports.workbookService.create(properties);
      });
    }
  };

  it.bootstrapData = [
    {
      title: 'План тестирования',
      introduction: null,
      question: 'Что является основной задачей планирования тестирования?',
      expectation: "SINGLESELECT",
      categories: [
        "TEST"
      ],
      difficulty: "EASY",
      solutionOptions: [
        {
          code: "A",
          content: "Определение подхода и методов тестирования",
          correct: false
        },
        {
          code: "B",
          content: "Подготовка спецификаций для тестов",
          correct: false
        },
        {
          code: "C",
          content: "Определение полученных результатов и составление отчета",
          correct: false
        },
        {
          code: "D",
          content: "Анализ и изучение результатов",
          correct: false
        }
      ]
    },

    {
      title: 'Black Box',
      introduction: null,
      question: 'Что из перечисленного НЕ является правдой - тестировщик по методу "черного ящика":',
      expectation: "SINGLESELECT",
      categories: [
        "TEST"
      ],
      difficulty: "EASY",
      solutionOptions: [
        {
          code: "A",
          content: "Должен понимать спецификацию системы и требования, которые к ней предъявлены",
          correct: false
        },
        {
          code: "B",
          content: "Должен понимать приниципы, заложенные в исходный код программы",
          correct: false
        },
        {
          code: "C",
          content: "Стремиться к нахождению ошибок и неточностей в программе",
          correct: false
        },
        {
          code: "D",
          content: "Проявлять творческий подход к нахождению слабых и уязвимых мест в системе",
          correct: false
        }
      ]
    },

    {
      title: 'Игра в прятки',
      introduction: null,
      question: 'Участки кода, которые никогда не будут выполняться, лучше всего находить с помощью',
      expectation: "SINGLESELECT",
      categories: [
        "TEST"
      ],
      difficulty: "EASY",
      solutionOptions: [
        {
          code: "A",
          content: "Код-ревью - проверка написанного кода более опытными разработчиками/тестировщиками",
          correct: false
        },
        {
          code: "B",
          content: "Автоматические проверки кода (code inspections)",
          correct: false
        },
        {
          code: "C",
          content: "Инструмент для определения степени покрытия тестами",
          correct: false
        },
        {
          code: "D",
          content: "Статический анализатор кода",
          correct: false
        }
      ]
    },

    {
      title: 'Методики тестирования',
      introduction: null,
      question: 'Какая из нижеперечисленных методик тестирования не является статичной?',
      expectation: "SINGLESELECT",
      categories: [
        "TEST"
      ],
      difficulty: "EASY",
      solutionOptions: [
        {
          code: "A",
          content: "Угадывание возможных ошибок",
          correct: false
        },
        {
          code: "B",
          content: "Прохождение тестового сценария",
          correct: false
        },
        {
          code: "C",
          content: "Анализ потока входных и выходных данных",
          correct: false
        },
        {
          code: "D",
          content: "Инспекции кода",
          correct: false
        }
      ]
    },

    {
      title: 'Элементы плана',
      introduction: null,
      question: 'Что определяют критерии завершенности в плане тестирования?',
      expectation: "SINGLESELECT",
      categories: [
        "TEST"
      ],
      difficulty: "EASY",
      solutionOptions: [
        {
          code: "A",
          content: "Условия завершения конкретного теста",
          correct: false
        },
        {
          code: "B",
          content: "Условия достаточности и полноты описания test-кейса",
          correct: false
        },
        {
          code: "C",
          content: "Условия при которых планирование тестирования считается завершенным",
          correct: false
        },
        {
          code: "D",
          content: "Условия завершения всего процесса тестирования",
          correct: false
        }
      ]
    }

  ];
})({

  workbookService: require('./task-service')
});
