document.addEventListener("DOMContentLoaded", function() {

    var content = new Vue({
        el: '.task',
        data: {
            list: [{
                id: 1,
                task: '進捗と今後',
                before_title: '今までやったこと',
                beforetext: [],//'Vue.jsデータバインディング',
                after_title: 'これからすること',
                aftertext: 'データの受け渡し',
                problem_title: '課題',
                problemtext: '相方睡眠不足でお休み中',
                answer_title: '解決方法',
                answertext: '詰んだ＼(^o^)／',
                date:'○月△日第何週',//[]
                username:[]
            },{
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
                date:'○月△日第何週',
                username:[]
            },{
                id: 3,
                task: '進捗と今後',
                before_title: '今までやったこと',
                beforetext: [],
                after_title: 'これからすること',
                aftertext: [],
                problem_title: '課題',
                problemtext: [],
                answer_title: '解決方法',
                answertext: [],
                date:'○月△日第何週',
                username:[]
            },{
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
                date:'○月△日第何週',
                username:[]
            }]
        },
        methods:{
          problem_submit:function(index){
            console.log(this.list[index].problem_input);
            this.list[index].problem ='';
            socket.emit('before_req',{before:this.list[index].before_input,id:index,name:'before'});
          },
          answer_submit:function(index){
            console.log(this.list[index].answer_input);
            this.list[index].problem ='';
            socket.emit('after_req',{before:this.list[index].before_input,id:index,name:'after'});
          },
          before_submit:function(index){
            console.log(this.list[index].before_input);


            this.list[index].problem ='';
            socket.emit('problem_req',{before:this.list[index].before_input,id:index,name:'problem'});
          },
          after_submit:function(index){
            console.log(this.list[index].after_input);
            this.list[index].problem ='';
            socket.emit('answer_req',{before:this.list[index].before_input,id:index,name:'answer'});
          }
        }
    });
});


    content.$set('list[0].beforetext',this.list[index].before_input);
socket.on('new_text',function(data){
  content.list[data.index].data.name .push(data);
});


(function() {
    socket.on('old_before', function(lists) {
      for (var list in lists){
        content.list[list.index].beforetext.push(list.before);
        }
    });
    socket.on('old_after', function(lists) {
      for (var list in lists){
        content.list[list.index].aftertext.push(list.after);
        }
    });
    socket.on('old_problem', function(lists) {
      for (var list in lists){
        content.list[list.index].beforetext.push(list.problem);
        }
    });
    socket.on('old_answer', function(lists) {
      for (var list in data){
        content.list[list.index].beforetext.push(list.answer);
        }
    });
}());
