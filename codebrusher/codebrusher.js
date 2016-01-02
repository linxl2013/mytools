// CodeBrusher by yumena.me
// Version 0.1.3
var cb = {
	TagBefore:{},
	TagAfter:{
		Num:{Exp:/(\b\d+\b)/g,Str:"<span class='code_purple'>$1</span>",Class:"code_purple"}
	},
	language:{
		php:{
			Special:{
				string:{Exp:/"([^"]*?)"/g,Class:'code_str'},
				string2:{Exp:/'([^']*?)'/g,Class:'code_str'},
				Note:{Exp:/(\/\/.*)$/gm,Class:'code_note'},
				Note2:{Exp:/(\/\*[\s\S]*?\*\/)/g,Class:'code_note'},
				Regular:{Exp:/(\/(?:[^\n])*?\/[igm]{0,3})/g,Class:'code_purple'},
				Variable:{Exp:/(\$[A-Za-z0-9_]+)/g,Class:'variable'},
				FunName:{Exp:/function\s+([A-Za-z0-9_]+?)\s*\(/g,Index:1,Class:'code_green'},
				ExtName:{Exp:/extends\s+([A-Za-z0-9_]+?)\s*\{/g,Index:1,Class:'code_green'},
				NewName:{Exp:/new\s+([A-Za-z0-9_]+?)\s*\(/g,Index:1,Class:'code_blue'},
				ClassName:{Exp:/([A-Za-z0-9_]+?)\s*\:\:/g,Index:1,Class:'code_blue'},
				ClassAName:{Exp:/\:\:/g,Class:'code_pink'},
				Sign:{Exp:/(===|!==|==|!=|=|!|\&\&|\|\||\&gt\;|\&gt\;=|\&lt\;=|-\&gt\;|=\&gt\;|\&lt\;|\+|\-|\*|\/|\.)/g,Class:'code_pink'}
			},
			Keyword:{
				blue:{Str:'function var class md5 strtolower strtoupper trim explode count date',Class:'code_blue'},
				purple:{Str:'array empty false true echo eval isset list unset __FILE__ __LINE__ __FUNCTION__ __CLASS__',Class:'code_purple'},
				pink:{Str:'new global static public private protected break case exit continue return const default die do elseif else if foreach for switch use while include_once include require_once require extends and xor or as',Class:'code_pink'},
			}
		},
		javascript:{
			Special:{
				string:{Exp:/"([^"]*?)"/g,Class:'code_str'},
				string2:{Exp:/'([^']*?)'/g,Class:'code_str'},
				Note:{Exp:/(\/\/.*)$/gm,Class:'code_note'},
				Note2:{Exp:/(\/\*[\s\S]*?\*\/)/g,Class:'code_note'},
				Regular:{Exp:/(\/(?:[^\n])*?\/[igm]{0,3})/g,Class:'code_purple'},
				FunName:{Exp:/([A-Za-z0-9_]+?)\s*\=\s*function/g,Index:1,Class:'code_green'},
				FunName2:{Exp:/function\s+([A-Za-z0-9_]+?)\s*\(/g,Index:1,Class:'code_green'},
				FunName3:{Exp:/function\s*\(([\s]||[\s\S]+?)\)/g,Index:1,Sub:8,Class:'code_yellow'},
				NewName:{Exp:/new\s+([A-Za-z0-9_]+?)\s*\(/g,Index:1,Class:'code_blue'},
				Sign:{Exp:/(===|!==|==|!=|=|!|\&\&|\|\||\&gt\;|\&gt\;=|\&lt\;=|-\&gt\;|=\&gt\;|\&lt\;|\+|\-|\*|\/)/g,Class:'code_pink'}
			},
			Keyword:{
				blue:{Str:'function var class void interface boolean byte char double enum float int long short document body window event alert',Class:'code_blue'},
				purple:{Str:'false true this',Class:'code_purple'},
				pink:{Str:'break case catch const continue default delete do else export extends finally final for goto if implements import instanceof new private protected public in return static switch throw throws try typeof while with',Class:'code_pink'}
			}
		},
		css:{
			Special:{
				string:{Exp:/"([^"]*?)"/g,Class:'code_str'},
				string2:{Exp:/'([^']*?)'/g,Class:'code_str'},
				Note:{Exp:/(\/\*[\s\S]*?\*\/)/g,Class:'code_note'},
				ClassName:{Exp:/([A-Za-z0-9\_\-\.\#\@\s]+?)\{/g,Index:1,Class:'code_pink'},
				Color:{Exp:/(\#[A-Za-z0-9]+)/g,Class:'code_purple'},
				Attr:{Exp:/([A-Za-z0-9\-]+)\:/g,Index:1,Class:'code_blue'},
				Unit:{Exp:/\d+(em|ex|px|pt|pc|in|cm|mm|ms|s|kHz|Hz)/g,Index:1,Class:'code_pink'}
			},
			Keyword:{}
		},
		csharp:{
			Special:{
				string:{Exp:/"([^"]*?)"/g,Class:'code_str'},
				string2:{Exp:/'([^']*?)'/g,Class:'code_str'},
				Note:{Exp:/(\/\/.*)$/gm,Class:'code_note'},
				Note2:{Exp:/(\/\*[\s\S]*?\*\/)/g,Class:'code_note'},
				Regular:{Exp:/(\/(?:[^\n])*?\/[igm]{0,3})/g,Class:'code_purple'},
				Region:{Exp:/(#region)/gm,Class:"code_yellow"},
				EndRegion:{Exp:/(#endregion)/gm,Class:"code_yellow"}
			},
			Keyword:{
				blue:{Str:'bool byte char double enum decimal float object sbyte string struct uint int ulong long ushort short var void class interface',Class:'code_blue'},
				purple:{Str:'false true',Class:'code_purple'},
				pink:{Str:'as in is abstract break case catch const continue default delegate do else event extern equals finally fixed foreach for from get goto if internal join lock namespace new out override params private protected public readonly ref return sealed select set sizeof stackalloc static switch throw try typeof on unsafe using virtual while',Class:'code_pink'}
			}
		},
		vb:{
			Special:{
				string:{Exp:/"([^"]*?)"/g,Class:'code_str'},
				Note:{Exp:/(\'.*)$/gm,Class:"code_note"},
				Regular:{Exp:/(\/(?:[^\n])*?\/[igm]{0,3})/g,Class:"code_purple"},
				EndClass:{Exp:/((End\s+)(Class|Sub|Function|Property))/gm,Class:"code_blue"},
				Region:{Exp:/(#Region)/gm,Class:"code_yellow"},
				EndRegion:{Exp:/(#End\s+Region)/gm,Class:"code_yellow"}
			},
			Keyword:{
				blue:{Str:'Boolean Byte CBool CByte CDate CDbl Char CInt CLng CSng CStr Date Integer Long Double String Single Variant Class Sub Function Property',Class:'code_blue'},
				purple:{Str:'True False',Class:'code_purple'},
				pink:{Str:'In Is Like As And On Xor Or Not New ByRef ByVal Call Case Catch ReDim Dim Do Each Else ElseIf For If Private Protected Public End Erase Error Exit Finally Get GoTo Imports Let Loop Mod Next Nothing Overridable Overrides Preserve REM Resume Return Select Set Static Stop Then To Until Try While With',Class:'code_pink'},
			}
		},
		ruby:{
			Special:{
				string:{Exp:/"([^"]*?)"/g,Class:'code_str'},
				string2:{Exp:/'([^']*?)'/g,Class:'code_str'},
				Note:{Exp:/(\#.*)$/gm,Class:"code_note"},
				Note2:{Exp:/(\=begin[\s\S]*?\=end)/g,Class:'code_note'},
				Regular:{Exp:/(\/(?:[^\n])*?\/[igm]{0,3})/g,Class:"code_purple"},
				Extend:{Exp:/class\s+[A-Za-z0-9_]+\s*(\&lt;\s*[\S]+)/g,Index:1,Class:"code_green"},
				FunName:{Exp:/def\s+([A-Za-z0-9_]+)\s*\(?/g,Index:1,Class:'code_green'},
				Variable:{Exp:/(\:[A-Za-z0-9_]+)/g,Class:'code_purple'},
				Model:{Exp:/([A-Z][a-z0-9_]+)\./g,Index:1,Class:'code_blue'},
				Sign:{Exp:/(===|!==|==|!=|=|!|\&\&|\|\||\&gt\;|\&gt\;=|\&lt\;=|-\&gt\;|=\&gt\;|\&lt\;|\+|\-|\*|\/)/g,Class:'code_pink'},
			},
			Keyword:{
				purple:{Str:'true false nil',Class:'code_purple'},
				pink:{Str:'alias and begin case class def defined elsif if end ensure in module next not or redo rescue retry return self super then undef unless until when yield BEGIN END',Class:'code_pink'},
			}
		},
		xml:{
			Special:{
				string:{Exp:/"([^"]*?)"/g,Class:'code_str'},
				string2:{Exp:/&lt;\!\[[\w\s]*?\[(.|\s)*?\]\]&gt;/g,Class:'code_str'},
				Note:{Exp:/\&lt;!--[\s\S]*?--\&gt;/g,Class:'code_note'},
				Name:{Exp:/([A-Za-z0-9_]+?)\s*\=/g,Index:1,Class:'code_green'},
				Node:{Exp:/\&lt;[\/\?]?([A-Za-z0-9_]+)\s*/g,Index:1,Class:'code_pink'},
			},
			Keyword:{}
		},
	}
}
cb.language.java = cb.language.javascript;
	
cb.CodeBrusher = {};
cb.CodeBrusher.transCode = function(s, brush){
	s = s.replace(/\</g,"&lt;");
	s = s.replace(/\>/g,"&gt;");
	s = s.replace(/\\\"/g,"&#92;&#34;");
	s = s.replace(/\\\'/g,"&#92;&#039;");
	s = s.replace(/\\\//g,"&#92;&#47;");

	this.code = s;
	this.originalCode = s;
	this.Phrases = Array();
	
	//cb.CodeBrusher.parseWord(cb.TagBefore);
	cb.CodeBrusher.parseSpecial(brush.Special);
	var Exp = Array();
	for(key in brush.Keyword)
		Exp[Exp.length]=cb.CodeBrusher.getRegExp(brush.Keyword[key]);
	cb.CodeBrusher.parseWord(Exp);
	cb.CodeBrusher.parseWord(cb.TagAfter);
	
	this.Phrases = this.Phrases.sort(cb.CodeBrusher.sortPhrases);
	s = cb.CodeBrusher.toBrush();
	return s;
};
cb.CodeBrusher.toBrush = function(){
	var colorCode = '';
	var pos = 0;
	var prvePhrase = '';
	this.code = this.originalCode;
	
	for(i=0;i<this.Phrases.length;i++){
		var Phrase = this.Phrases[i];
		if(Phrase.index >= pos && Phrase.length > 0){
			colorCode += this.code.substr(pos, Phrase.index-pos);
			var value = this.code.substr(Phrase.index, Phrase.length);
			colorCode += prvePhrase = "<span class='"+Phrase.class+"'>" + value + "</span>";
			pos = Phrase.index + Phrase.length;
		}
	}
	colorCode += this.code.substr(pos);
	return colorCode;
};
cb.CodeBrusher.sortPhrases = function(p1, p2){
	if(p1.index < p2.index)
		return -1;
	else if(p1.index > p2.index)
		return 1;
	else{
		if(p1.length < p2.length)
			return -1;
		else if(p1.length > p2.length)
			return 1;
	}
	return 0;
}

cb.CodeBrusher.getRegExp = function(w){
	var expstr = '(\\b'+w.Str.replace(/ /g,'\\b|\\b')+'\\b)';
	return {Exp:new RegExp(expstr, 'gm'),Class:w.Class};
};
//Phrase object
cb.CodeBrusher.Phrase = function(value, index, length, classname){
	this.value = value;
	this.index = index;
	this.length = length;
	this.class = classname;
}
cb.CodeBrusher.parseSpecial = function(reg){
	for(k in reg){
		var Exp = reg[k];
		Exp.Index = !Exp.Index?0:Exp.Index;
		while((match=Exp.Exp.exec(this.code))!= null){
			var index = match.index
			if(Exp.Index>0){
				var matchstring = Exp.Sub ? match[0].substr(Exp.Sub) : match[0];
				index += matchstring.search(new RegExp(''+match[Exp.Index]+'', '')) + (Exp.Sub ? Exp.Sub : 0);
			}
			this.Phrases[this.Phrases.length] = new cb.CodeBrusher.Phrase(match[Exp.Index], index, match[Exp.Index].length, Exp.Class);
			this.code = cb.CodeBrusher.replaceSpaces(index, match[Exp.Index].length);
		}
	}
}
cb.CodeBrusher.parseWord = function(reg){
	for(k in reg){
		while((match=reg[k].Exp.exec(this.code))!= null){
			this.Phrases[this.Phrases.length] = new cb.CodeBrusher.Phrase(match[0], match.index, match[0].length, reg[k].Class);
			this.code = cb.CodeBrusher.replaceSpaces(match.index, match[0].length);
		}
	}
}
cb.CodeBrusher.replaceSpaces = function(pos, length){
	var left = this.code.substr(0, pos);
	var right = this.code.substr(pos+length);
	var spaces = '';
	for(i=0;i<length;i++)
		spaces += ' ';
	return left + spaces + right;
}
cb.CodeBrusher.extend = function(obj1, obj2){  
	var obj={};
	for(k in obj1)
		obj[k]=obj1[k];
	for(k in obj2)
		obj[k]=obj2[k];
	return obj;
}
cb.CodeBrusher.getLangAlias = function(obj){
	var ret={},i=0;
	for(k in obj){
		if(i>1)	ret[k]=obj[k];
		else i++;
	}
	return ret;
}
// defaults    
cb.CodeBrusher.defaults = {
	tag: 'pre',
	class: '',
	php: 'php',
	javascript: 'javascript',
	css: 'css',
	csharp: 'csharp',
	java: 'java',
	vb: 'vb',
	ruby: 'ruby',
	xml: 'xml',
}
	
cb.CodeBrusher.init = function(options){
	function T(name){
		return document.getElementsByTagName(name);
	}
	var opts = cb.CodeBrusher.extend(cb.CodeBrusher.defaults, options);
	var langs = cb.CodeBrusher.getLangAlias(opts);
	var tags = T(opts.tag);
	for(var i=0;i<tags.length;i++){
		if(tags[i].getAttribute('class').indexOf(opts.class)!=-1){
			for(j in langs){
				if(tags[i].getAttribute('class').indexOf(langs[j])!=-1){
					code = cb.CodeBrusher.transCode(tags[i].innerHTML, cb.language[j]);
					if(opts.tag!='pre'){
						var pre = document.createElement('PRE');
						pre.className = tags[i].className;
						pre.innerHTML = code;
						tags[i].parentNode.insertBefore(pre, tags[i]);
						tags[i].style.display = 'none';
					}else{
						tags[i].innerHTML = code;
					}
					break;
				}
			}
		}
	}
}
window.CodeBrusher = cb.CodeBrusher.init;