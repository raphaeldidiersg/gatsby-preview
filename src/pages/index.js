import React from "react"
import { graphql } from 'gatsby'

import Layout from "../components/Layout"
import ScrollProgress from '../components/ScrollProgress'

const IndexPage = ({ data }) => (
  <Layout>
    <ScrollProgress />
    <h1>{data && data.nodePageDAccueil && data.nodePageDAccueil.title}</h1>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed placerat nisi non justo accumsan imperdiet. Aliquam venenatis sollicitudin condimentum. Nam ornare libero sit amet pellentesque efficitur. Cras finibus blandit cursus. Nulla sit amet est vel urna accumsan ultricies eget a augue. Maecenas gravida commodo fringilla. Donec commodo eget quam non elementum. Integer finibus odio eget diam mollis, non laoreet diam gravida. Sed rhoncus hendrerit odio nec malesuada. Integer eu felis est. Proin facilisis magna in est fermentum, a suscipit lectus iaculis.

Morbi posuere lacinia sem, a pharetra risus viverra ac. Vestibulum convallis velit odio, a fermentum erat aliquam ac. Aenean lobortis feugiat velit, nec tincidunt turpis aliquet non. Sed finibus dui velit, sed consequat nulla egestas eu. Curabitur sed blandit sem. Etiam tincidunt odio et lacus tempor, in ultrices augue tincidunt. Aenean ut vestibulum elit, in aliquet arcu. Sed in suscipit lacus. Suspendisse pretium ipsum sed facilisis mollis. Proin vehicula mauris quis auctor rutrum. Donec iaculis volutpat leo. Nullam pretium lacinia enim, ac laoreet ipsum iaculis non. Vivamus sit amet lacus sit amet lectus commodo interdum.

Proin ligula odio, suscipit in lorem id, egestas tristique ipsum. Duis augue tellus, sagittis vitae leo eget, venenatis pharetra leo. Ut turpis lorem, malesuada sit amet bibendum sed, porta ac tellus. Donec scelerisque at odio vel dignissim. Aliquam eget lacus porttitor, blandit lectus id, accumsan risus. Ut urna justo, tincidunt eget auctor in, venenatis id dui. Nullam tincidunt ornare congue. Nulla feugiat pulvinar mauris id rhoncus. Nullam commodo blandit dui ut efficitur. Duis luctus scelerisque sollicitudin.

Morbi non ullamcorper ante. Morbi finibus vehicula elit, eleifend ultrices sem suscipit at. Aliquam vulputate fermentum lectus, in semper nisl imperdiet at. Morbi tempus lectus id odio blandit, at suscipit ante pulvinar. Aliquam tristique luctus eros, ut auctor mauris finibus id. Suspendisse id magna eu turpis semper sodales sed eget ante. Maecenas ac est tincidunt, feugiat justo id, eleifend diam. Nullam porta blandit odio, vel ultricies erat lobortis at. Morbi iaculis arcu sed ipsum vestibulum sagittis. Aenean scelerisque, diam id rutrum luctus, erat turpis congue quam, vitae semper velit quam quis eros. Proin vel urna efficitur, aliquam nunc vel, lobortis turpis. Fusce laoreet dolor sit amet ullamcorper accumsan. Sed at condimentum nisi, vitae lacinia quam. Praesent et massa erat. Duis euismod sit amet odio ac molestie.

Ut eget tristique ex. Phasellus viverra vitae ligula ac ullamcorper. In hac habitasse platea dictumst. Cras tempor sagittis mauris sit amet congue. Phasellus eget lectus lacus. Fusce in libero eu ipsum dapibus sagittis sit amet et lectus. Vestibulum tempor tellus nec sapien sollicitudin pretium. In quam orci, mattis nec efficitur ut, molestie rhoncus nisl.

Nunc quis elit quis magna consequat consectetur. Nulla tempor dolor ut elementum tempor. Praesent ut tortor eget orci varius blandit eget et enim. Vestibulum consequat ante vitae nibh rutrum, imperdiet molestie lacus eleifend. Pellentesque nec augue vitae turpis volutpat viverra vitae sed nibh. Etiam vitae auctor enim, nec sollicitudin est. Curabitur blandit tellus quis hendrerit efficitur. Cras ullamcorper bibendum urna, eu laoreet enim dignissim in. Morbi id ligula libero. Mauris commodo varius ex quis tristique. In vitae orci id tortor scelerisque finibus. Etiam at fermentum diam. Sed maximus sed urna vitae rutrum. Phasellus in malesuada enim, a faucibus sem. Cras tempus posuere auctor.

Integer dapibus tellus nec odio imperdiet imperdiet. Nunc fermentum nibh nec laoreet porta. Nullam consequat libero ut porttitor molestie. Aliquam dignissim posuere est, et iaculis nisl porta nec. Duis quis ligula ut urna imperdiet dapibus ut ut ipsum. Suspendisse fermentum volutpat erat vel sollicitudin. Nam ac lobortis lacus, eu bibendum risus. Integer felis dui, elementum vel egestas id, tristique id justo. In aliquet arcu magna, vitae vestibulum metus tempus eu. Sed facilisis urna vitae nisi volutpat semper. Aliquam erat volutpat. Maecenas dignissim velit ut dolor lobortis iaculis.

Integer consectetur nisl ut dolor consequat efficitur. Aenean ullamcorper sollicitudin est at lobortis. Mauris nec risus pulvinar nulla malesuada viverra. Pellentesque pharetra velit ut aliquam eleifend. Maecenas nec commodo augue, et egestas lorem. Pellentesque nibh risus, vulputate non elit in, aliquet semper orci. Morbi fringilla, dui sed laoreet semper, ligula leo aliquet enim, eget facilisis dolor odio quis justo.

Phasellus pulvinar finibus lectus non ullamcorper. Phasellus sollicitudin lacus tellus, quis elementum purus molestie non. Aenean in odio sed neque vestibulum lacinia at quis enim. Aliquam molestie, ipsum sit amet faucibus interdum, tellus neque lacinia tortor, nec ullamcorper diam turpis non turpis. Vivamus dolor justo, facilisis eget dolor eu, tempor luctus elit. Nulla placerat eleifend risus, et sagittis dolor pretium vitae. Pellentesque augue magna, pellentesque vitae arcu nec, porta condimentum nunc. Vivamus at augue sed nisi eleifend rutrum. Duis justo risus, fringilla et leo nec, venenatis rutrum ipsum. Aenean vitae sem urna. Ut hendrerit diam a gravida consectetur. Integer fringilla libero in euismod cursus.

Etiam non tincidunt orci. Nam ac facilisis diam. Nam dictum nibh eu velit luctus tristique. Donec leo arcu, viverra eget facilisis et, semper mattis nisl. Nunc auctor, ante ut convallis tempor, orci diam pharetra diam, sit amet venenatis felis elit id turpis. Sed non vehicula enim. Phasellus sed sem congue, ultrices neque et, congue metus. Cras ultricies sapien non quam dapibus, sed egestas ex posuere. Sed est odio, sollicitudin id augue quis, malesuada accumsan nulla. Suspendisse et tincidunt eros, ut sodales ante. Nunc et varius nisl.

Sed bibendum metus lorem, sed lobortis libero congue iaculis. Donec ac ultrices magna, id bibendum lectus. Maecenas at efficitur diam. In hac habitasse platea dictumst. Integer mollis imperdiet orci eget euismod. Phasellus ultrices maximus felis at euismod. Vestibulum sit amet elementum neque. Cras velit ligula, varius at sollicitudin id, volutpat vel nunc. Praesent ante orci, sollicitudin sit amet suscipit ut, euismod id tellus. Maecenas velit metus, tincidunt et felis nec, luctus viverra metus. Quisque hendrerit, lacus nec vestibulum interdum, nulla lacus aliquet purus, sodales rutrum nibh eros eu libero.

Quisque at ornare magna, vel fringilla tortor. Integer ornare fringilla lectus vel scelerisque. Nunc interdum elit sed varius congue. Cras ut mi vel sapien auctor eleifend. Nulla mattis posuere odio, sit amet feugiat ante bibendum vitae. Proin eget quam at sapien suscipit rhoncus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.

Etiam ligula dolor, tristique feugiat sodales et, pulvinar nec risus. Vestibulum suscipit ipsum vel condimentum blandit. Nulla facilisi. Etiam egestas tristique odio, eu consequat dui sodales ac. Integer in blandit metus, id ultricies nibh. Sed nibh quam, ultrices at ullamcorper quis, vehicula pulvinar arcu. Fusce luctus felis eget iaculis volutpat. Fusce sit amet maximus ante, ac ultricies eros.

Vestibulum ut turpis at neque egestas elementum. Aliquam euismod purus at elit blandit accumsan. Nulla maximus libero malesuada lacus rhoncus malesuada. Vivamus ultrices sapien quis pharetra condimentum. Maecenas auctor blandit augue non maximus. Morbi porta massa lacus, quis laoreet quam pharetra semper. Quisque tempor ullamcorper neque.

Vivamus posuere metus accumsan orci venenatis, nec imperdiet est aliquet. Proin varius lectus quis purus volutpat, non feugiat erat mollis. Morbi condimentum ex lacinia, aliquet urna aliquet, ullamcorper diam. Praesent malesuada turpis erat, et vehicula mauris aliquet a. Aenean id metus quis mauris euismod mattis et non magna. Cras et laoreet nunc. Nam eleifend velit et est iaculis, sed viverra nulla hendrerit. Morbi eu faucibus risus. Proin rhoncus semper ligula, id rutrum est consectetur ac. Sed id neque eget justo mollis blandit.

Donec leo ligula, convallis quis dictum quis, euismod ut magna. Donec ornare fringilla metus, vel facilisis metus posuere id. Phasellus vel lorem tortor. Morbi ut aliquam lectus. Phasellus varius at nunc at faucibus. Nunc tempus mi suscipit justo blandit, pretium convallis lorem lobortis. Donec libero magna, consectetur ac felis vitae, faucibus consectetur turpis. Nunc feugiat justo eget dui pharetra venenatis. Aliquam non nisi ornare, luctus ante nec, sodales leo. Mauris eu arcu lobortis, tempor urna nec, viverra enim. Integer malesuada pulvinar ipsum a convallis. Curabitur ac semper diam, non placerat erat. Cras tincidunt felis neque, a pharetra mi finibus at. Nulla auctor lectus augue, at porttitor dui scelerisque in. Integer ultrices hendrerit justo a rhoncus.

Fusce porta enim sed felis dignissim, ac tempus magna aliquam. Proin nec tortor at libero efficitur tristique maximus in sem. Proin sed sem imperdiet, tincidunt velit ut, fringilla sem. Pellentesque eget sem nisl. Pellentesque tellus justo, interdum sed diam in, congue placerat nisi. Quisque leo nisl, bibendum in eleifend ut, porta id libero. Suspendisse potenti. Nunc quis orci ac risus aliquet cursus nec a purus. Vestibulum iaculis, felis ut posuere congue, arcu magna maximus augue, et scelerisque ex enim quis felis. Phasellus volutpat blandit nisl, ut fringilla erat ornare in. Aliquam tincidunt odio sem, vel egestas erat congue lacinia. Ut consequat facilisis gravida. Etiam lobortis, enim a convallis accumsan, quam ante pulvinar nulla, id iaculis mi urna vel augue. Maecenas sed justo nec sem cursus semper.

Sed ac neque at justo fringilla aliquam. Sed sed aliquet urna. Nulla vel magna a diam efficitur convallis. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nulla dictum, massa eget hendrerit sollicitudin, metus odio viverra mauris, vitae feugiat risus dui non justo. Duis nibh ante, porttitor vel vestibulum nec, tempor et urna. Vivamus porttitor lacus vitae aliquam viverra.

Vivamus tincidunt magna id augue porttitor blandit. Pellentesque venenatis malesuada sem, ut dapibus nulla maximus ac. Quisque blandit ante eu aliquam mattis. Maecenas vestibulum ligula at faucibus venenatis. Etiam at euismod metus. Nullam vel malesuada enim, vitae interdum dui. Donec non congue est. Donec sit amet finibus odio. Cras volutpat iaculis erat, non tristique diam. Etiam mattis risus urna, ut ultrices mauris gravida ac. Phasellus molestie molestie ex in congue.

Mauris at euismod diam, sed fermentum mauris. Curabitur ornare non augue nec rhoncus. Fusce odio est, dictum vitae arcu a, lobortis porta ex. Sed nunc justo, convallis in efficitur et, luctus ac quam. Ut mi nunc, bibendum id aliquet et, placerat dictum ante. Aliquam vitae eros nibh. Curabitur eu orci eget lorem pretium convallis dictum ac quam. Curabitur sapien felis, tincidunt sed ligula id, volutpat fermentum diam. Donec ac augue consequat, euismod sapien quis, lacinia neque. Maecenas vel maximus justo. Phasellus molestie mauris non ipsum dignissim cursus. Nunc egestas tempus ante ac porttitor.

</p>
  </Layout>
)

export default IndexPage

export const query = graphql`
  query MyQuery {
    nodePageDAccueil {
      title
    }
  }
`
