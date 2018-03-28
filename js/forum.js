<!--
        function showFeed (threads) {
            var maxTitleLength = 60;	// maximum length of the title
            var forum_topics_list = "";
            var showAsPosts = false;
            var date_obj = new Date();

            if (document.getElementById('forumFeedJs').src.match('&show=posts')) {
                showAsPosts = true;
            }

            if (typeof(threads) != 'undefined' && threads.length) {
                forum_topics_list += '<ul>';

                for(i = 0; i < threads.length && i < 5; i++) {
                    if (threads[i].title.length > maxTitleLength) {
                        threads[i].title = threads[i].title.replace(/<.+?>/gi, ''); // strip HTML to avoid tags chopped in the middle
                        threads[i].title = threads[i].title.substring(0, maxTitleLength) + '...';
                    }

                    var url = threads[i].url;

                    if (showAsPosts) {
                        url += '?pid=' + threads[i].post.postid;
                    }

                    forum_topics_list += '<li>';
                    forum_topics_list += '<a href="'+ url +'" class="forum_topic_title" target="_top">' + threads[i].title + '</a>';

                    if (showAsPosts) {
                        threads[i].post.message = threads[i].post.message.replace(/<.+?>/g, ' '); // remove HTML
                        forum_topics_list += '<div class="forum_topic_message">'+ threads[i].post.message +'</div>';
                    }
                    var topic_date;
                    try {
                        if(parseInt(date_obj.getTime()/1000 - threads[i].date) <= 86400){
                            topic_date = moment(threads[i].date,'X').fromNow();
                        } else if (date_obj.getFullYear() ==   moment(threads[i].date,'X').format('YYYY')){
                            topic_date = 'on ' + moment(threads[i].date,'X').format('MMM DD');
                        } else{
                            topic_date = 'on ' + moment(threads[i].date,'X').format('MMM DD, YYYY');
                        }
                    } catch (e) {
                        topic_date = timeConverter(date_obj, threads[i].date);
                    }
                    forum_topics_list += '<div class="forum_topic_desc">Posted by ' + threads[i].author + ' ' + topic_date + '</div>';
                    forum_topics_list += '</li>';
                }

                forum_topics_list += '</ul>';
            } else {
                forum_topics_list += 'There are currently no topics to display.';
            }

            document.getElementById('forum_topics_list').innerHTML = forum_topics_list;
        }

        /* This function is used to convert unix time stamp into full date. */
        function timeConverter(date_obj, timestamp){
            var time;
            var postTime = timestamp;
            var post_time = new Date(postTime*1000);
            var secondsPast = (date_obj.getTime() - post_time.getTime()) / 1000;
            if(secondsPast < 60){
                time = parseInt(secondsPast) + ' just now';
            } else if(secondsPast < 3600) {
                time = parseInt(secondsPast/60);
                if(time == 1) {
                    time = time + " minute ago";
                } else {
                    time = time + " minutes ago";
                }
            } else if(secondsPast <= 86400) {
                time = parseInt(secondsPast/3600);
                if(time == 1) {
                    time = time + " hour ago";
                } else {
                    time = time + " hours ago";
                }
            } else {
                var months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
                var year = post_time.getFullYear();
                var month = months[post_time.getMonth()];
                var date = post_time.getDate();
                var hour = post_time.getHours();

                // Get current year;
                var current_year = date_obj.getFullYear();

                time = 'on ' + month + ' ' + date;
                // Show current year only if post created year is different with current year.
                if(year != current_year) {
                    time = time + ' ' + year;
                }
            }
            return time;
        }

        -->