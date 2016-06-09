---
layout: post
title:  "Enviando e-mails pelo PHP - com PHPMailer"
date:   2016-05-17 16:12:55 -0300
categories: php
---
# Ok, acabei tudo, só falta...o envio dos emails ¬¬
Eu sei que isso, talvez seja algo totalmente simples pros maix velhos, só que, para nós(eternos novatos, e realmente novatos), talvez seja um verdadeiro Monstro do Lago Ness.
Lá estava eu, me matando lindamente pra criar [URLs Amigáveis com o .htaccess]() - minha primeira vez, estava testando em um servidor gratuito, porque não conseguia localmente -, quando finalmente consegui a tal proeza, me deparei com outra quest:
*Enviar emails.*

Pronto. Já era. Quando eu acreditei que não precisava mais de um servidor remoto, me lembrei dessa parada aí.

Fiquei me perguntando se era possível fazer isso localmente e caso sim, se eu não precisaria reinventar a roda só pra poder rodar uns emailzinhos né.
Falo isso porque eu li em algumas respostas no Yahoo! e nego disse que dava muito trabalho e tudo mais, que era mais fácil usar um remoto e etc.
Dei uma rápida pesquisada no Google, com a ideia de que: *se ferrar tudo, é só apagar o apache2 e instalar novamente, se isso não funcionar eu taco fogo no PC e viro contador*.


Ria de mim o quanto quiser, meu caro amigo. Eu no seu lugar não apenas iria rir como também comentar algum pensamento catastrófico lá em baixo. Hahahahaha.

## Chega de papo furado, vambora configurar issâe!
Dá até uma dorzinha na alma escrever isso, porque é normal você dizer o "issâe"", mas escrevendo, fica se sentindo uma anta aprendendo o cálculo do Bháskara.

Bom, eu vou dizer o que eu fiz - que funcionou, derr - aqui no meu PC(XUbuntu 14.04):

Usei o *cd /etc/apache2/mods-enabled* pra chegar até a pasta dos mods do Apache2, depois dei uma olhada se já tinha o SSL ativado, usando *ls*.
Isso foi o que me retornou:

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
Então, naveguei até o php.ini usando *cd /etc/php/7.0/apache2*, e editando através do Nano: *sudo nano ./php.ini*.

Procure pelo bloco de comentários chamado "Dynamic Extensions", em seguida só removi o *;* na frente das seguintes extensões: *extension=php_openssl.dll* e *extension=php_sockets.dll*.

Por fim, apenas salve e feche, dê um *cd* e reinicie o servidor Apache2 com *sudo service apache2 restart*.

Prontinho! Teu localhost agora pode enviar emails perfeitamente...nem tão perfeitamente assim.

## O aclamado PHPMailer
O PHP por si já tem a função de *mail()*, que faz o envio de emails pelo próprio PHP. O problema é que, essa função, usa **as configurações de SMTP já definidas**. Porém, no localhost, tem nada definido não querido!

Por isso temos o PHPMailer, ele configura tudinho pra noix. Quer saber como usar? Se liga:

Copie a pasta do [PHPMailer](), que está no Github, para o seu projeto. Eu coloquei a pasta toda, porque provavelmente utilizarei muita coisa no decorrer do meu projeto, mas vi alguns comentários de gente que usou apenas as classes **class.phpmailer.php**, **class.pop3.php** e **class.smtp.php**. Não sei se somente com elas funciona, porque eu não testei.

Em seguida, peça o arquivo **PHPMailerAutoload.php** através do *require*, e instancie.
No meu caso, eu sempre uso a váriavel $mail pra instanciar, porque realmente fica mais fácil de entender.

Após instanciar, você só vai precisar dessas linhas:

{% highlight php %}
	$mail = new PHPMailer;
	// Configura para envio de e-mails usando SMTP
	$mail->isSMTP(); 
	// Servidor SMTP
	$mail->Host = 'smtp.gmail.com';
	// Usar autenticação SMTP 
	$mail->SMTPAuth = true; 
	// Usuário da conta
	$mail->Username = 'midia.matheus@gmail.com';
	// Senha da conta 
	$mail->Password = 'sua_senha';
	// Tipo de encriptação que será usado na conexão SMTP 
	$mail->SMTPSecure = 'ssl';
	// Porta do servidor SMTP 
	$mail->Port = 465; 
	// Informa se vamos enviar mensagens usando HTML
	$mail->IsHTML(true); 
	// Email do Remetente
	$mail->From = 'midia.matheus@gmail.com';
	// Nome do Remetente 
	$mail->FromName = 'Matheus'; 
	// Endereço do e-mail do destinatário
	$mail->addAddress('midia.matheus@gmail.com');
	// Assunto do e-mail 
	$mail->Subject = 'E-mail PHPMailer'; 
	// Mensagem que vai no corpo do e-mail
	$mail->Body = 'Mensagem enviada via PHPMailer';
	if ($mail->Send()) {
		echo "Email enviado com sucesso!";
	} else {
		echo "Email não enviado!";
	} 
{% endhighlight %}

### Extra extra!
Como podem ver, eu utilizei meu GMail para enviar, só que, se você tentar agora, muito provavelmente não vai conseguir **porque o GMail bloqueia outros serviços**, a menos que você permita.
Se quiser liberar as permissões, é só [entrar aqui]() e selecionar a opção de "Desativar", por fim confirmar.

**Estou ressaltando aqui que, isso pode deixar sua conta mais vulnerável, e eu/o blog nos isentamos de qualquer problema que ocorra com você, relacionado à isto. Tome muito cuidado. Considere-se avisado.**

Eu fiz o teste e consegui normalmente. Caso você esteja utilizando o Windows, infelizmente não poderei responder muitas perguntas, porque eu uso Ubuntu.

Gostou? Não gostou? Tá neutrô? Comenta aí!
Sugestões, críticas, e etc são sempre bem-vindas!