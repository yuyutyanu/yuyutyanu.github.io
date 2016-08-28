document.addEventListener("DOMContentLoaded", function() {
    var content = new Vue({
        el: '.task',
        data: {
            list: [{
                id: 1,
                task: '進捗と今後',
                before_title: '今までやったこと',
                beforetext: [], //'Vue.jsデータバインディング',
                after_title: 'これからすること',
                aftertext: [],
                problem_title: '課題',
                problemtext: [],
                answer_title: '解決方法',
                answertext: [],
                date: '○月△日第何週', //[]
                username: []
            }, {
                id: 2,
                task: '進捗と今後',
                before_title: '今までやったこと',
                beforetext: [],
                after_title: 'これからすること',
                aftertext: [],
                problem_title: '課題',
                problemtext: [],
                answer_title: '解決方法',
                answertext: [],
                date: '○月△日第何週',
                username: []
            }, {
                id: 3,
                task: '進捗と今後',
                before_title: '今までやったこと',
                beforetext: [],
                after_title: 'これからすること',
                aftertext: [],
                problem_title: '課題',
                problemtext: ["aaaaa","aaadsd"],
                answer_title: '解決方法',
                answertext: [],
                date: '○月△日第何週',
                username: []
            }, {
                id: 4,
                task: '進捗と今後',
                before_title: '今までやったこと',
                beforetext: [],
                after_title: 'これからすること',
                aftertext: [],
                problem_title: '課題',
                problemtext: [],
                answer_title: '解決方法',
                answertext: [],
                date: '○月△日第何週',
                username: []
            }]
        },
        methods: {
            problem_submit: function(index) {
                console.log(index);
                socket.emit('problem_req', {
                    text: this.list[index].problem_input,
                    id: index,
                    name: 'problemtext'
                });
                this.list[index].problem_input = '';
            },
            answer_submit: function(index) {
                console.log(this.list[index].answer_input);
                socket.emit('answer_req', {
                    text: this.list[index].answer_input,
                    id: index,
                    name: 'answertext'
                });
                this.list[index].answer_input = '';
            },
            before_submit: function(index) {
                console.log(this.list[index].before_input);
                socket.emit('before_req', {
                    text: this.list[index].before_input,
                    id: index,
                    name: 'beforetext'
                });
                this.list[index].before_input = '';
            },
            after_submit: function(index) {
                console.log(this.list[index].after_input);
                socket.emit('after_req', {
                    text: this.list[index].after_input,
                    id: index,
                    name: 'aftertext'
                });
                this.list[index].after_input = '';
            }
        }
    });


  socket.on('new_text', function(data) {
    var name = data.name;
    var idx  = data.id;
    console.log(content.list[idx][name]);
    content.list[idx][name].push(data.text);
    console.log(content.list[idx]);
  });
});


(function() {
    socket.on('old_before', function(old_befores) {
      for(var idx in old_befores){
          content.list[old_befores][idx].beforetext.push(list.text);
        }
    });
    socket.on('old_after', function(old_afters) {
      for(var idx in old_afters){
          content.list[old_afters][idx].aftertext.push(list.text);
        }
    });
    socket.on('old_problem', function(old_problems) {
      for(var idx in old_problems){
          content.list[old_problems][idx].problemtext.push(list.text);
        }
    });
    socket.on('old_answer', function(old_answers) {
      for(var idx in old_answers){
          content.list[old_answers][idx].answertext.push(list[old_answers][idx]);
        }
    });
}());
