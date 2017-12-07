(function ($) {
	$.fn.extend({
		jQuizler: function (questions) {
			if (questions == null)
				throw 'No questions was provided.';

			var reviewQuiz = false;
			var percentage = 0;
			var percentPiece = 100 / questions.length;
			var rightAnswers = 0;

			$(this).html("<div class=\"intro\">" + $(this).html() + "</div>");

			$(this).click(function () {
				$(this).off('click');

				$(".intro").hide();
				$(this).css("text-align", "left");
				$('.progress').css("display", "block");

				var question = $("#question-1");

				question.css({ opacity: '0', height: '0px' });

				question.animate({
					opacity: '1',
					height: '100%'
				}, 500, function (e) { });

				question.css('display', 'block');

				percentage += percentPiece;
				$(".progress div").css("width", percentage + "%");
			});

			(function ($) {
				$.shuffle = function (arr) {
					for (
						var j, x, i = arr.length; i;
						j = parseInt(Math.random() * i),
						x = arr[--i], arr[i] = arr[j], arr[j] = x
					);
					return arr;
				}
			})(jQuery);

			String.prototype.replaceAll = function (find, replace) {
				var str = this;
				return str.replace(new RegExp(find, 'g'), replace);
			};

			return this.each(function () {
				var html = "";

				html += "<div class=\"results slide-container question\" style=\"display:none\"></div>";

				$.each(questions, function (index, question) {
					html += "<div id=\"question-" + (index + 1) + "\" class=\"slide-container question\">";

					html += question.question;

					var correctAnswers = [];
					for (var i = 0; i < question.correct.length; i++)
						correctAnswers.push(question.answers[question.correct[i] - 1]);

					question.answers = $.shuffle(question.answers);

					var correctAnswersNewIndexes = [];
					for (var i = 0; i < question.correct.length; i++)
						correctAnswersNewIndexes.push(question.answers.indexOf(correctAnswers[i]));

					question.correct = correctAnswersNewIndexes;

					html += "<ul class=\"answers\">";

					for (var i = 0; i < question.answers.length; i++)
						html += "<li class=\"btn\">" + question.answers[i] + "</li>";

					html += "</ul>";
					html += "<div class=\"nav-container\">";

					html += "<div class=\"notice alert alert-info\">Оберіть відповідь</div>";

					if (index != 0) {
						html += "<button class=\"prev btn btn-info\">Попередній</button>";
					}

					if (index != questions.length - 1) {
						html += "<button class=\"next btn btn-success\">Наступний</button>";
						html += "<div style=\"clear:both\"></div>";	
					} else {
						html += "<button class=\"final btn btn-success\">Результат</button>";
						html += "<div style=\"clear:both\"></div>";
					}

					html += "</div></div>";

					html += "</div>";
				});

				html += "<div class=\"progress progress-info progress-striped\">";
				html += "<div id=\"percent\" class=\"bar\" style=\"width: 0%;\"></div>";
				html += "</div>";

				$(this).append(html);

				$("div[id*='question-'] li").click(function () {
					if (!reviewQuiz) {
						$(this).siblings().removeClass("btn-info");
						$(this).toggleClass("btn-info");
					}
				});

				$(".final").click(function (e) {
					var div = $(e.target).closest("div[id*='question-']");
					var userAnswer = div.find("li.btn-info");

					if (userAnswer.index() == -1 && !reviewQuiz) {
						var notice = div.find(".notice");
						notice.css('opacity', '0');

						notice.animate({
							opacity: 1
						}, 500, function () { });

						div.find(".notice").css('display', 'block');
					} else if (!reviewQuiz) {
						div.find(".notice").css('display', 'none');

						percentage += percentPiece;
						if (percentage > 100) percentage = 100;
						$("#percent").css("width", percentage + "%");

						var resultHTML = "<h3 style=\"text-align: center\">Результати</h3>";

						var buttonsHTML = '';
						$.each(questions, function (index, question) {
							var element = $("#question-" + (index + 1) + " ul li.btn-info");

							if (element.index() == question.correct) {
								element.removeClass("btn-info");
								element.addClass("btn-success");

								buttonsHTML += "<button class=\"btn btn-success\"> Питання " + (index + 1) + "</button>";
								rightAnswers++;
							} else {
								element.removeClass("btn-info");
								element.addClass("btn-danger");

								buttonsHTML += "<button class=\"btn btn-danger\"> Питання " + (index + 1) + "</button>";

								for (var i = 0; i < question.correct.length; i++) {
									element.parent().find('li').eq(question.correct[i]).addClass("btn-success");
								}
							}
						});

						resultHTML += "<p style=\"margin: 14px 0px\">Ви відповіли на " + Math.round(((rightAnswers * 100) / questions.length) * 100) / 100 + "% питань.</p>";
						resultHTML += buttonsHTML;
						resultHTML += "<p style=\"margin-top:25px; text-align: center\"><button class=\"btn btn-large tostart\">Подивитись відповіді</button></p>";

						div.animate({
							opacity: '0'
						}, 500, function (e) {
							div.css('display', 'none');
							div.find(".notice").css('display', 'none');

							$(".results").append(resultHTML);
							$(".results").css("opacity", "0");
							$(".results").css("display", "block");

							$(".results").animate({
								opacity: '1'
							}, 500, function (e) {
							});
						});

						$(".progress").animate({
							opacity: '0'
						}, 100, function (e) { });

						reviewQuiz = true;
					} else {
						$(".results").animate({
							opacity: "1",
							display: "block"
						}, 100, function (e) { });

						div.animate({
							opacity: '0'
						}, 500, function (e) {
							div.css('display', 'none');
							div.find(".notice").css('display', 'none');

							$(".results").append(resultHTML);
							$(".results").css("opacity", "0");
							$(".results").css("display", "block");

							$(".results").animate({
								opacity: '1'
							}, 500, function (e) {
							});
						});

						$(".progress").animate({
							opacity: '0'
						}, 100, function (e) { });
					}

					return false;
				});

				$(".next").click(function (e) {
					var div = $(e.target).closest("div[id*='question-']");
					var userAnswer = div.find("li.btn-info");

					if (userAnswer.index() == -1 && !reviewQuiz) {
						var notice = div.find(".notice");
						notice.css('opacity', '0');

						notice.animate({
							opacity: 1
						}, 500, function () { });

						div.find(".notice").css('display', 'block');
					} else {

						var nextId = parseInt(div.attr('id').replace('question-', '')) + 1;

						var newQuestion = $("#question-" + nextId);

						div.animate({
							opacity: '0'
						}, 500, function (e) {
							div.css('display', 'none');
							div.find(".notice").css('display', 'none');

							newQuestion.css({ opacity: '0', height: '0px' });

							newQuestion.animate({
								opacity: '1',
								height: '100%'
							}, 500, function (e) { });

							newQuestion.css('display', 'block');
						});

						percentage += percentPiece;
						$(".progress div").css("width", percentage + "%");
					}

					return false;
				});

				$(".prev").click(function (e) {
					var div = $(e.target).closest("div[id*='question-']");

					var prevId = parseInt(div.attr('id').replace('question-', '')) - 1;

					var newQuestion = $("#question-" + prevId);

					div.animate({
						opacity: '0'
					}, 500, function (e) {
						div.css('display', 'none');

						newQuestion.css({ opacity: '0', height: '0px' });

						newQuestion.animate({
							opacity: '1',
							height: '100%'
						}, 500, function (e) { });

						newQuestion.css('display', 'block');
					});

					percentage -= percentPiece;
					$(".progress div").css("width", percentage + "%");

					return false;
				});

				$(".results").click(function (e) {
					$(".results").animate({ opacity: 0 }, 500, function (e) {
						$(".results").css("display", "none");

						var question = $("#question-1");

						question.css({ opacity: '0', height: '0px' });

						question.animate({
							opacity: '1',
							height: '100%'
						}, 500, function (e) { });

						question.css('display', 'block');

						$(".progress div").css("width", "0");
						$(".progress div").css("display", "block");
						$(".progress").animate({
							opacity: '1'
						}, 300, function (e) {
							percentage = 0;
							percentage += percentPiece;
							$(".progress div").css("width", percentage + "%");
						});
					});
				});
			});
		}
	});

})(jQuery);