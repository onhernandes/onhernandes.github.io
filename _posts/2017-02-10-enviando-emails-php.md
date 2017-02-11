---
layout: article
title: 'Enviando e-mails pelo PHP - PHPMailer'
date: 2017-02-10 16:12:55 -0300
color: '#834496'
category: php
intro: 'Enviar emails pelo PHP da forma mais simples possível'
---

# Ok, acabei tudo, só falta...o envio dos emails ¬¬
Enviar emails pelo PHP pode ser uma tarefa um pouco complicada se você for fazer por conta própria. Ainda bem que temos o [PHPMailer](https://github.com/PHPMailer/PHPMailer) - uma lib pra te ajudar à enviar emails.

Bom, eu vou dizer o que eu fiz aqui no meu PC(XUbuntu 14.04):

Usei o *cd /etc/apache2/mods-enabled* pra chegar até a pasta dos mods do Apache2, depois dei uma olhada se já tinha o SSL ativado, usando *ls*.
Esse foi o meu retorno:

{% highlight unix %}
	access_compat.load  authz_user.load  filter.load       php7.0.load
	alias.conf          autoindex.conf   mime.conf         rewrite.load
	alias.load          autoindex.load   mime.load         setenvif.conf
	auth_basic.load     deflate.conf     mpm_prefork.conf  setenvif.load
	authn_core.load     deflate.load     mpm_prefork.load  status.conf
	authn_file.load     dir.conf         negotiation.conf  status.load
	authz_core.load     dir.load         negotiation.load
	authz_host.load     env.load         php7.0.conf
{% endhighlight %}

Como vocês podem ver, eu não tenho o **socache_shmcb.load**, **ssl.conf** e o **ssl.load** ativados. 
Então, eu apenas dei um *sudo a2enmod ssl* e com isso ativei o SSL no Apache2. Pra conferir, foi só dar outro *ls* e ver:

{% highlight text %}
	access_compat.load  authn_file.load  autoindex.load  env.load          mpm_prefork.load  rewrite.load        ssl.load
	alias.conf          authz_core.load  deflate.conf    filter.load       negotiation.conf  setenvif.conf       status.conf
	alias.load          authz_host.load  deflate.load    mime.conf         negotiation.load  setenvif.load       status.load
	auth_basic.load     authz_user.load  dir.conf        mime.load         php7.0.conf       socache_shmcb.load
	authn_core.load     autoindex.conf   dir.load        mpm_prefork.conf  php7.0.load       ssl.conf
{% endhighlight %}

## Configurando o php.ini
Então, navegue até o php.ini - *cd /etc/php/7.0/apache2* -, e edite-o através do nano - *sudo nano php.ini*.

Procure pelo bloco de comentários chamado "Dynamic Extensions", em seguida só remova o *;* na frente das seguintes extensões: *php_openssl* e *php_sockets*

Por fim, apenas salve e feche, dê um *cd* e reinicie o servidor Apache2 - *sudo service apache2 restart*.

Pronto! Teu servidor local agora pode enviar emails perfeitamente...nem tão perfeitamente assim.

## PHPMailer
O PHP por si já tem a função de *mail()*, que faz o envio de emails pelo próprio PHP. O problema é que, essa função, usa **as configurações de SMTP já definidas ou não**.

Por isso temos o PHPMailer, ele configura quase tudo.

Copie a pasta do [PHPMailer](https://github.com/PHPMailer/PHPMailer), que está no Github para o seu projeto. Eu coloquei a pasta toda, porque provavelmente utilizarei muita coisa no decorrer do meu projeto.

Em seguida, chame o arquivo **PHPMailerAutoload.php** através do *require*, e instancie.
No meu caso, eu uso a váriavel $mail pra instanciar.

Após instanciar, você só vai precisar dessas linhas:

{% highlight php %}
	<?php
		// Instancia o PHPMailer
		$mail = new PHPMailer;
		// Configura para envio de e-mails usando SMTP
		$mail->isSMTP(); 
		// Servidor SMTP
		$mail->Host = 'smtp.gmail.com';
		// Usar autenticação SMTP 
		$mail->SMTPAuth = true; 
		// Usuário da conta
		$mail->Username = 'seu.email@gmail.com';
		// Senha da conta 
		$mail->Password = 'sua_senha';
		// Tipo de encriptação que será usado na conexão SMTP 
		$mail->SMTPSecure = 'ssl';
		// Porta do servidor SMTP 
		$mail->Port = 465; 
		// Informa se vamos enviar mensagens usando HTML
		$mail->IsHTML(true); 
		// Email do Remetente
		$mail->From = 'remetente@abc.com';
		// Nome do Remetente 
		$mail->FromName = 'Remetente'; 
		// Endereço do e-mail do destinatário
		$mail->addAddress('destinatario@abc.com');
		// Assunto do e-mail 
		$mail->Subject = 'E-mail PHPMailer'; 
		// Mensagem que vai no corpo do e-mail
		$mail->Body = 'Mensagem enviada via PHPMailer';
		// Faz o teste de envio com $mail->Send();
		if ($mail->Send()) {
			echo "Email enviado com sucesso!";
		} else {
			echo "Email não enviado!";
		}
	?> 
{% endhighlight %}

## Extra extra!
Como podem ver, eu utilizei meu GMail para enviar, só que, se você tentar agora, muito provavelmente não vai conseguir **porque o GMail bloqueia outros serviços**, a menos que você permita.
Se quiser liberar as permissões do Gmail, é só [entrar aqui](http://www.google.com.br/settings/security/lesssecureapps) e selecionar a opção de "Desativar", por fim confirmar.

_Estou ressaltando aqui que, isso pode deixar sua conta vulnerável. Tome muito cuidado. Considere-se avisado._

Eu fiz o teste e consegui normalmente. Caso você esteja utilizando o Windows, infelizmente não poderei responder muitas perguntas, porque eu uso Ubuntu e nunca fiz o mesmo procedimento lá - mas a parte de usar o PHPMailer funciona normalmente, você só precisa ativar alguns modes no Apache.

Sugestões, críticas, e etc são sempre bem-vindas!